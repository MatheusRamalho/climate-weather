import { CloudyIcon } from './icons/CloudyIcon'
import { DropsIcon } from './icons/DropsIcon'
import { PinIcon } from './icons/PinIcon'
import { RainIcon } from './icons/RainIcon'
import { WindIcon } from './icons/WindIcon'
import { Skeleton } from './Skeleton'

interface TemperatureNowProps {
    city: string
    state: string
    temperature: number
    minimumTemperature: number
    maximumTemperature: number
    infos: {
        type: 'wind' | 'rain' | 'moisture'
        value: number
    }[]
}

export function TemperatureNow({
    city,
    state,
    temperature,
    minimumTemperature,
    maximumTemperature,
    infos,
}: TemperatureNowProps) {
    return (
        <div className="relative size-full p-10 space-y-10 rounded-xl bg-primary-700 flex flex-col items-center justify-between">
            <div className="absolute -top-14 -left-14 hidden sm:block">
                <CloudyIcon width={150} height={150} />
            </div>

            <div className="w-full flex items-center justify-end gap-2">
                <PinIcon />

                <h6 className="text-primary-200 text-base">
                    {`${city}, ${state}`}
                </h6>
            </div>

            <div className="w-full flex items-center justify-center">
                <div className="flex items-center justify-center flex-col gap-1">
                    <span className="text-8xl text-white font-bold">
                        {temperature}º
                    </span>

                    <div className="flex gap-3">
                        <span className="text-xl text-white">
                            {maximumTemperature}º
                        </span>

                        <span className="text-xl text-primary-200">
                            {minimumTemperature}º
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center flex-wrap gap-10">
                {infos.length > 0 &&
                    infos.map((info, index) => {
                        return (
                            <div
                                key={index}
                                className="flex-1 h-16 px-8 rounded-md bg-primary-500/50 flex items-center justify-center gap-4"
                            >
                                {info.type === 'wind' && <WindIcon />}
                                {info.type === 'moisture' && <DropsIcon />}
                                {info.type === 'rain' && <RainIcon />}

                                <div className="flex-1">
                                    <span className="text-primary-100 text-sm">
                                        {info.type === 'wind' && 'Vento'}
                                        {info.type === 'moisture' && 'Umidade'}
                                        {info.type === 'rain' && 'Chuva'}
                                    </span>

                                    <div className="">
                                        <span className="text-primary-100 text-lg font-bold">
                                            {info.value}
                                        </span>

                                        <span className="text-primary-200 text-sm">
                                            {info.type === 'wind' && 'Km/h'}
                                            {info.type === 'moisture' && '%'}
                                            {info.type === 'rain' && '%'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export function TemperatureNowSkeleton() {
    return (
        <div className="relative size-full p-10 space-y-10 rounded-xl bg-primary-700 flex flex-col items-center justify-between">
            <div className="absolute -top-14 -left-14 hidden sm:block">
                <CloudyIcon width={150} height={150} />
            </div>

            <div className="w-full flex items-center justify-end gap-2">
                <Skeleton className="w-10 h-6 bg-primary-500" />
                <Skeleton className="w-40 h-6 bg-primary-500" />
            </div>

            <div className="w-fit space-y-2 mx-auto">
                <Skeleton className="w-20 h-16 bg-primary-500" />
                <Skeleton className="w-20 h-10 bg-primary-500" />
            </div>

            <div className="flex items-center justify-between gap-4">
                {Array.from({ length: 3 }, (_, index) => (
                    <Skeleton key={index} className="w- h-12 bg-primary-500" />
                ))}
            </div>
        </div>
    )
}
