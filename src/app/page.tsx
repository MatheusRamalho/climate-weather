'use client'

import { FormEvent, useState } from 'react'
import { useMutation, UseMutationResult } from '@tanstack/react-query'

import {
    getWeather,
    getWeatherParams,
    getWeatherResponse,
} from '@/api/get-weather'

import { Button } from '@/components/Button'
import { AirQuality, AirQualitySkeleton } from '@/components/AirQuality'
import { WeekWeather, WeekWeatherSkeleton } from '@/components/WeekWeather'
import { SunTime, SunTimeSkeleton } from '@/components/SunTime'
import {
    TemperatureNow,
    TemperatureNowSkeleton,
} from '@/components/TemperatureNow'

import { SearchClimateModal } from './modules/search-climate-modal'

export default function Home() {
    const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false)
    const [cityName, setCityName] = useState<string>('')

    const mutation: UseMutationResult<
        getWeatherResponse,
        Error,
        getWeatherParams
    > = useMutation({
        mutationFn: getWeather,
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
            await mutation.mutateAsync({ cityName })
        } catch (error) {
            console.error(error)
        } finally {
            closeSearchModal()
        }
    }

    // `https://openweathermap.org/img/wn/${tempIcon}.png`

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
                    {mutation.isPending || !mutation.data ? (
                        <TemperatureNowSkeleton />
                    ) : (
                        <TemperatureNow
                            city={mutation.data.name}
                            state={mutation.data?.sys.country}
                            temperature={mutation.data.main.temp}
                            maximumTemperature={mutation.data.main.temp_min}
                            minimumTemperature={mutation.data.main.temp_max}
                            infos={[
                                {
                                    type: 'rain',
                                    value: mutation.data.main.humidity,
                                },
                                {
                                    type: 'moisture',
                                    value: mutation.data.main.humidity,
                                },
                                {
                                    type: 'wind',
                                    value: mutation.data.wind.speed,
                                },
                            ]}
                        />
                    )}
                </div>

                <div className="flex-1 flex flex-col gap-8">
                    <div className="flex  flex-col md:flex-row gap-8">
                        {mutation.isPending || !mutation.data ? (
                            <AirQualitySkeleton />
                        ) : (
                            <AirQuality
                                qualitytext="Boa"
                                qualityNumber={21}
                                othersQuality={[
                                    {
                                        qualityNumber: 12.9,
                                        qualitytext: 'PM2.5',
                                    },
                                    {
                                        qualityNumber: 12.9,
                                        qualitytext: 'PM2.5',
                                    },
                                    {
                                        qualityNumber: 12.9,
                                        qualitytext: 'PM2.5',
                                    },
                                    {
                                        qualityNumber: 12.9,
                                        qualitytext: 'PM2.5',
                                    },
                                    {
                                        qualityNumber: 12.9,
                                        qualitytext: 'PM2.5',
                                    },
                                    {
                                        qualityNumber: 12.9,
                                        qualitytext: 'PM2.5',
                                    },
                                ]}
                            />
                        )}

                        {mutation.isPending || !mutation.data ? (
                            <SunTimeSkeleton />
                        ) : (
                            <SunTime />
                        )}
                    </div>

                    {mutation.isPending || !mutation.data ? (
                        <WeekWeatherSkeleton />
                    ) : (
                        <WeekWeather
                            days={[
                                {
                                    day: 'segunda',
                                    minimumTemperature: '12',
                                    maximumTemperature: '20',
                                    type: 'cloud',
                                },
                            ]}
                        />
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
