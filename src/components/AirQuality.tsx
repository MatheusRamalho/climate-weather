import { qualifyAirQuality } from '@/utils/format'

import { LeafIcon } from './icons/LeafIcon'
import { Skeleton } from './Skeleton'

interface AirQualityProps {
    list: [
        {
            main: {
                aqi: number
            }
            components: {
                co: number
                no: number
                no2: number
                o3: number
                so2: number
                pm2_5: number
                pm10: number
                nh3: number
            }
            dt: number
        },
    ]
}

export function AirQuality({ list }: AirQualityProps) {
    const { info, description } = qualifyAirQuality(list[0].main.aqi)

    return (
        <div className="flex-1 w-full md:w-1/2 min-h-64 py-8 px-4 space-y-10 rounded-xl bg-primary-700 flex flex-col justify-between">
            <div className="flex items-center justify-center gap-2">
                <LeafIcon />

                <h6 className="text-primary-200 text-lg font-bold">
                    Qualidade do ar
                </h6>
            </div>

            <div className="w-full flex items-center justify-center">
                <div className="flex items-center justify-center flex-col gap-1">
                    <span className="block text-xl text-secondary-500 font-semibold">
                        {info}
                    </span>

                    <span className="block text-xs text-primary-300 font-bold text-center max-w-52">
                        {description}
                    </span>
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
                <AirQualityMetric name="co" value={list[0].components.co} />
                <AirQualityMetric name="nh3" value={list[0].components.nh3} />
                <AirQualityMetric name="no" value={list[0].components.no} />
                <AirQualityMetric name="no2" value={list[0].components.no2} />
                <AirQualityMetric name="O3" value={list[0].components.o3} />
                <AirQualityMetric name="pm10" value={list[0].components.pm10} />
                <AirQualityMetric
                    name="pm2_5"
                    value={list[0].components.pm2_5}
                />
                <AirQualityMetric name="so2" value={list[0].components.so2} />
            </div>
        </div>
    )
}

interface AirQualityMetricProps {
    name: string
    value: number
}

export function AirQualityMetric({ name, value }: AirQualityMetricProps) {
    return (
        <div className="w-fit flex items-center justify-center flex-col gap-1">
            <span className="block text-sm text-secondary-500">{value}</span>
            <span className="block text-sm text-primary-200">{name}</span>
        </div>
    )
}

export function AirQualitySkeleton() {
    return (
        <div className="flex-1 w-full md:w-1/2 min-h-64 py-8 px-4 space-y-10 rounded-xl bg-primary-700 flex flex-col justify-between">
            <div className="flex items-center justify-center gap-2">
                <Skeleton className="w-10 h-6 bg-primary-500" />
                <Skeleton className="w-40 h-6 bg-primary-500" />
            </div>

            <div className="w-fit space-y-2 mx-auto">
                <Skeleton className="w-16 h-4 bg-primary-500" />
                <Skeleton className="w-16 h-4 bg-primary-500" />
            </div>

            <div className="flex items-center justify-between gap-4">
                {Array.from({ length: 6 }, (_, index) => (
                    <div className="space-y-2" key={index}>
                        <Skeleton className="w-10 h-4 bg-primary-500" />
                        <Skeleton className="w-10 h-4 bg-primary-500" />
                    </div>
                ))}
            </div>
        </div>
    )
}
