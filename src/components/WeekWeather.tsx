import { dateFormatDayOfWeek } from '@/utils/format'

import { RainyIcon } from './icons/RainyIcon'
import { StormIcon } from './icons/StormIcon'
import { SunCloudIcon } from './icons/SunCloudIcon'
import { SunnyIcon } from './icons/SunnyIcon'
import { CloudIcon } from './icons/CloudIcon'
import { WindIcon } from './icons/WindIcon'
import { CloudDoubleIcon } from './icons/CloudDoubleIcon'
import { Skeleton } from './Skeleton'

interface WeekWeatherProps {
    days: {
        dt: number
        main: {
            temp: number
            feels_like: number
            temp_min: number
            temp_max: number
            pressure: number
            humidity: number
            sea_level: number
            grnd_level: number
        }
        weather: [
            {
                id: number
                main: string
                description: string
                icon: string
            },
        ]
        clouds: {
            all: number
        }
        wind: {
            speed: number
            deg: number
            gust: number
        }
        visibility: number
        pop: number
        sys: {
            pod: string
        }
        dt_txt: string
    }[]
}

export function WeekWeather({ days }: WeekWeatherProps) {
    return (
        <div className="w-full min-h-64 py-4 px-8 rounded-xl bg-primary-700 flex items-center justify-center flex-col">
            <div className="w-full flex items-stretch justify-center gap-6 flex-wrap">
                {days.length > 0 &&
                    days.map((day, index) => {
                        return (
                            <div
                                key={index}
                                className="w-fit flex items-center justify-between flex-col gap-4"
                            >
                                <span className="block text-sm text-primary-200 font-semibold">
                                    {dateFormatDayOfWeek(day.dt)}
                                </span>

                                {(day.weather[0].icon === '01d' ||
                                    day.weather[0].icon === '01n') && (
                                    <SunnyIcon
                                        aria-label={day.weather[0].description}
                                    />
                                )}

                                {(day.weather[0].icon === '02d' ||
                                    day.weather[0].icon === '02n') && (
                                    <SunCloudIcon
                                        aria-label={day.weather[0].description}
                                    />
                                )}

                                {(day.weather[0].icon === '03d' ||
                                    day.weather[0].icon === '03n') && (
                                    <CloudIcon
                                        aria-label={day.weather[0].description}
                                    />
                                )}

                                {(day.weather[0].icon === '04d' ||
                                    day.weather[0].icon === '04n') && (
                                    <CloudDoubleIcon
                                        aria-label={day.weather[0].description}
                                    />
                                )}

                                {(day.weather[0].icon === '09d' ||
                                    day.weather[0].icon === '09n' ||
                                    day.weather[0].icon === '10d' ||
                                    day.weather[0].icon === '10d') && (
                                    <RainyIcon
                                        aria-label={day.weather[0].description}
                                    />
                                )}

                                {(day.weather[0].icon === '11d' ||
                                    day.weather[0].icon === '11n') && (
                                    <StormIcon
                                        aria-label={day.weather[0].description}
                                    />
                                )}

                                {(day.weather[0].icon === '50d' ||
                                    day.weather[0].icon === '50n') && (
                                    <WindIcon
                                        aria-label={day.weather[0].description}
                                    />
                                )}

                                <div className="flex gap-1">
                                    <span className="text-xs text-white">
                                        {day.main.temp_max}
                                    </span>

                                    <span className="w-px h-4 bg-primary-500" />

                                    <span className="text-xs text-primary-200">
                                        {day.main.temp_min}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export function WeekWeatherSkeleton() {
    return (
        <div className="w-full min-h-64 py-4 px-8 rounded-xl bg-primary-700 flex items-center justify-center gap-10">
            {Array.from({ length: 5 }, (_, index) => (
                <div className="space-y-8" key={index}>
                    <Skeleton className="w-10 h-4 bg-primary-500" />
                    <Skeleton className="w-10 h-12 bg-primary-500" />
                    <Skeleton className="w-10 h-4 bg-primary-500" />
                </div>
            ))}
        </div>
    )
}
