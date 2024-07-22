'use client'

import { FormEvent, useState } from 'react'
import { useMutation, UseMutationResult } from '@tanstack/react-query'

import {
    getWeather,
    getWeatherParams,
    getWeatherResponse,
} from '@/api/get-weather'
import {
    getForecastResponse,
    getForecastParams,
    getForecast,
} from '@/api/get-forecast'

import { Button } from '@/components/Button'
import { AirQuality, AirQualitySkeleton } from '@/components/AirQuality'
import { WeekWeather, WeekWeatherSkeleton } from '@/components/WeekWeather'
import { SunTime, SunTimeSkeleton } from '@/components/SunTime'
import {
    TemperatureNow,
    TemperatureNowSkeleton,
} from '@/components/TemperatureNow'

import { SearchClimateModal } from './modules/search-climate-modal'
import {
    getAirPollutionResponse,
    getAirPollutionParams,
    getAirPollution,
} from '@/api/get-air-pollution'

export default function Home() {
    const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false)
    const [cityName, setCityName] = useState<string>('')

    const {
        mutateAsync: mutateWeatherAsync,
        data: weatherData,
        isPending: isWeatherPending,
    }: UseMutationResult<
        getWeatherResponse,
        Error,
        getWeatherParams
    > = useMutation({
        mutationFn: getWeather,
    })

    const {
        mutateAsync: mutateForecastAsync,
        data: forecastData,
        isPending: isForecastPending,
    }: UseMutationResult<
        getForecastResponse,
        Error,
        getForecastParams
    > = useMutation({
        mutationFn: getForecast,
    })

    const {
        mutateAsync: mutateAirPollutionAsync,
        data: airPollutionData,
        isPending: isAirPollutionPending,
    }: UseMutationResult<
        getAirPollutionResponse,
        Error,
        getAirPollutionParams
    > = useMutation({
        mutationFn: getAirPollution,
    })

    function openSearchModal() {
        setIsSearchModalOpen(true)
    }

    function closeSearchModal() {
        setIsSearchModalOpen(false)
    }

    async function searchClimateCity(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if (!cityName) {
            return
        }

        try {
            const weatherResponse = await mutateWeatherAsync({ cityName })

            await mutateWeatherAsync({ cityName })

            await mutateForecastAsync({ cityName })

            if (
                weatherResponse &&
                weatherResponse.coord.lat &&
                weatherResponse.coord.lon
            ) {
                await mutateAirPollutionAsync({
                    latitude: weatherResponse.coord.lat,
                    longitude: weatherResponse.coord.lon,
                })
            }
        } catch (error) {
            console.error(error)
        } finally {
            closeSearchModal()
        }
    }

    return (
        <>
            <div className="z-10 fixed top-8 right-8">
                <Button
                    name="Consultar clima"
                    type="button"
                    onClick={openSearchModal}
                />
            </div>

            <main className="w-full h-auto container mx-auto flex flex-col xl:flex-row gap-20">
                <div className="flex-1">
                    {isWeatherPending || !weatherData ? (
                        <TemperatureNowSkeleton />
                    ) : (
                        <TemperatureNow
                            city={weatherData.name}
                            state={weatherData?.sys.country}
                            temperature={weatherData.main.temp}
                            maximumTemperature={weatherData.main.temp_min}
                            minimumTemperature={weatherData.main.temp_max}
                            infos={[
                                {
                                    type: 'rain',
                                    value: weatherData.clouds.all,
                                },
                                {
                                    type: 'moisture',
                                    value: weatherData.main.humidity,
                                },
                                {
                                    type: 'wind',
                                    value: weatherData.wind.speed,
                                },
                            ]}
                        />
                    )}
                </div>

                <div className="flex-1 flex flex-col gap-8">
                    <div className="flex  flex-col md:flex-row gap-8">
                        {isWeatherPending || !weatherData ? (
                            <SunTimeSkeleton />
                        ) : (
                            <SunTime
                                description={weatherData.weather[0].description}
                                main={weatherData.weather[0].main}
                                icon={weatherData.weather[0].icon}
                                feelsLike={weatherData.main.feels_like}
                            />
                        )}

                        {isAirPollutionPending || !airPollutionData ? (
                            <AirQualitySkeleton />
                        ) : (
                            <AirQuality list={airPollutionData.list} />
                        )}
                    </div>

                    {isForecastPending || !forecastData ? (
                        <WeekWeatherSkeleton />
                    ) : (
                        <WeekWeather days={forecastData.list} />
                    )}
                </div>
            </main>

            {isSearchModalOpen && (
                <SearchClimateModal
                    setCityName={setCityName}
                    searchClimateCity={searchClimateCity}
                    closeSearchClimateModal={closeSearchModal}
                />
            )}
        </>
    )
}
