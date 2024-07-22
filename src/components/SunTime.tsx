import { TimeIcon } from './icons/TimeIcon'
import { Skeleton } from './Skeleton'
import { WeatherIcon } from './WatherIcon'

interface SunTimeProps {
    main: string
    description: string
    icon: string
    feelsLike: number
}

export function SunTime({ description, icon, feelsLike }: SunTimeProps) {
    return (
        <div className="flex-1 w-full md:w-1/2 min-h-64 py-8 px-4 space-y-10 rounded-xl bg-primary-700 flex flex-col justify-start">
            <div className="flex items-center justify-center gap-2">
                <TimeIcon />

                <h6 className="text-primary-200 text-lg font-bold">Hoje</h6>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
                <span className="block text-lg text-secondary-500 capitalize">
                    {description}
                </span>

                <WeatherIcon icon={icon} alt={description} />
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
                <span className="block text-sm text-primary-200">
                    Sensação térmica
                </span>

                <span className="block text-sm text-primary-200">
                    {feelsLike}
                </span>
            </div>
        </div>
    )
}

export function SunTimeSkeleton() {
    return (
        <div className="flex-1 w-full md:w-1/2 min-h-64 py-8 px-4 space-y-4 rounded-xl bg-primary-700 flex flex-col justify-between">
            <div className="flex items-center justify-center gap-2">
                <Skeleton className="w-10 h-6 bg-primary-500" />
                <Skeleton className="w-40 h-6 bg-primary-500" />
            </div>

            <Skeleton className="w-full h-16 bg-primary-500" />

            <div className="flex items-center justify-between gap-2">
                <Skeleton className="w-12 h-6 bg-primary-500" />
                <Skeleton className="w-12 h-6 bg-primary-500" />
            </div>
        </div>
    )
}
