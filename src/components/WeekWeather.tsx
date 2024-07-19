import { CloudyIcon } from './icons/CloudyIcon'
import { RainyIcon } from './icons/RainyIcon'
import { StormIcon } from './icons/StormIcon'
import { SunCloudIcon } from './icons/SunCloudIcon'
import { SunnyIcon } from './icons/SunnyIcon'
import { Skeleton } from './Skeleton'

interface WeekWeatherProps {
    days: {
        day: string
        type: 'cloud' | 'sunny' | 'rainy' | 'storm' | 'normal'
        minimumTemperature: string
        maximumTemperature: string
    }[]
}

export function WeekWeather({ days }: WeekWeatherProps) {
    return (
        <div className="w-full min-h-64 py-4 px-8 rounded-xl bg-primary-700 flex items-center justify-center flex-col">
            <div className="w-full flex items-center justify-center gap-10 flex-wrap">
                {days.length > 0 &&
                    days.map((day, index) => {
                        return (
                            <div
                                key={index}
                                className="w-fit flex items-center justify-between flex-col gap-8"
                            >
                                <span className="block text-sm text-primary-200">
                                    {day.day}
                                </span>

                                {day.type === 'cloud' && <CloudyIcon />}
                                {day.type === 'sunny' && <SunnyIcon />}
                                {day.type === 'normal' && <SunCloudIcon />}
                                {day.type === 'rainy' && <RainyIcon />}
                                {day.type === 'storm' && <StormIcon />}

                                <div className="flex gap-1">
                                    <span className="text-xs text-white">
                                        {day.maximumTemperature}
                                    </span>

                                    <span className="text-xs text-primary-200">
                                        {day.minimumTemperature}
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
