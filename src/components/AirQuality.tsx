import { LeafIcon } from './icons/LeafIcon'
import { Skeleton } from './Skeleton'

interface AirQualityProps {
    qualitytext: string
    qualityNumber: number
    othersQuality: {
        qualitytext: string
        qualityNumber: number
    }[]
}

export function AirQuality({
    qualitytext,
    qualityNumber,
    othersQuality,
}: AirQualityProps) {
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
                        {qualitytext}
                    </span>

                    <span className="block text-3xl text-primary-200 font-bold">
                        {qualityNumber}
                    </span>
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
                {othersQuality.length > 0 &&
                    othersQuality.map((element, index) => {
                        return (
                            <div
                                key={index}
                                className="w-fit flex items-center justify-center flex-col gap-1"
                            >
                                <span className="block text-sm text-secondary-500">
                                    {element.qualityNumber}
                                </span>

                                <span className="block text-xs text-primary-200">
                                    {element.qualitytext}
                                </span>
                            </div>
                        )
                    })}
            </div>
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
