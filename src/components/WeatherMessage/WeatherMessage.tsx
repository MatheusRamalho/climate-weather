interface WeatherMessageProps {
    message: string
}

export const WeatherMessage = ({ message }: WeatherMessageProps) => {
    return <div className="weather-message">{message}</div>
}
