'use client'

import { useState, FormEvent } from 'react'

import { API_URL_BASE, API_KEY, API_METRIC, API_LANG } from '@/constants'

import { ResearchingTheWeather } from '@/components/ResearchingTheWeather'
import {
    WeatherInformation,
    WeatherInformationProps,
} from '@/components/WeatherInformation'
import { WeatherMessage } from '@/components/WeatherMessage'

export default function Home() {
    const [searchInput, setSearchInput] = useState<string>('')
    const [openWeather, setOpenWeather] =
        useState<WeatherInformationProps | null>(null)
    const [weatherMessage, setWeatherMessage] = useState<string>('')

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()

        if (searchInput !== '') {
            setWeatherMessage('Carregando...')

            const response = await fetch(
                `${API_URL_BASE}?q=${encodeURI(
                    searchInput,
                )}&appid=${API_KEY}&units=${API_METRIC}&lang=${API_LANG}`,
            )
            const data = await response.json()

            if (data.cod === 200) {
                const dataOpenWeather = {
                    name: data.name,
                    country: data.sys.country,
                    temp: data.main.temp,
                    tempIcon: data.weather[0].icon,
                    windSpeed: data.wind.speed,
                    windAngle: data.wind.deg,
                }

                setOpenWeather(dataOpenWeather)
                setWeatherMessage('')
                setSearchInput('')
            } else {
                setOpenWeather(null)
                setWeatherMessage('Não encontramos essa localização!')
                setSearchInput('')
            }
        } else {
            setOpenWeather(null)
        }
    }

    return (
        <div className="w-full max-w-[1024px]">
            <h1 className="font-bold text-white text-5xl text-center">
                {' '}
                Clima{' '}
            </h1>

            <ResearchingTheWeather
                onSubmit={handleSubmit}
                onChange={setSearchInput}
                value={searchInput}
            />

            <WeatherInformation
                defaultShow={!!openWeather}
                name={openWeather ? openWeather.name : ''}
                country={openWeather ? openWeather.country : ''}
                temp={openWeather ? openWeather.temp : ''}
                tempIcon={openWeather ? openWeather.tempIcon : ''}
                windSpeed={openWeather ? openWeather.windSpeed : ''}
                windAngle={openWeather ? openWeather.windAngle : 0}
            />

            <WeatherMessage message={weatherMessage} />
        </div>
    )
}
