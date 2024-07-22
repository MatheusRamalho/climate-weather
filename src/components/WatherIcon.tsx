import { CloudDoubleIcon } from './icons/CloudDoubleIcon'
import { CloudIcon } from './icons/CloudIcon'
import { RainyIcon } from './icons/RainyIcon'
import { StormIcon } from './icons/StormIcon'
import { SunCloudIcon } from './icons/SunCloudIcon'
import { SunnyIcon } from './icons/SunnyIcon'
import { WindIcon } from './icons/WindIcon'

interface WeatherIconProps {
    icon: string
    alt: string
}

export function WeatherIcon({ icon, alt }: WeatherIconProps) {
    return (
        <>
            {(icon === '01d' || icon === '01n') && (
                <SunnyIcon aria-label={alt} />
            )}

            {(icon === '02d' || icon === '02n') && (
                <SunCloudIcon aria-label={alt} />
            )}

            {(icon === '03d' || icon === '03n') && (
                <CloudIcon aria-label={alt} />
            )}

            {(icon === '04d' || icon === '04n') && (
                <CloudDoubleIcon aria-label={alt} />
            )}

            {(icon === '09d' ||
                icon === '09n' ||
                icon === '10d' ||
                icon === '10d') && <RainyIcon aria-label={alt} />}

            {(icon === '11d' || icon === '11n') && (
                <StormIcon aria-label={alt} />
            )}

            {(icon === '50d' || icon === '50n') && (
                <WindIcon aria-label={alt} />
            )}
        </>
    )
}
