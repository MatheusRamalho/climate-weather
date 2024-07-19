import { TimeIcon } from './icons/TimeIcon'
import { Skeleton } from './Skeleton'

export function SunTime() {
    return (
        <div className="flex-1 w-full md:w-1/2 min-h-64 py-8 px-4 space-y-10 rounded-xl bg-primary-700 flex flex-col justify-between">
            <div className="flex items-center justify-center gap-2">
                <TimeIcon />

                <h6 className="text-primary-200 text-lg font-bold">
                    Horário do sol
                </h6>
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
