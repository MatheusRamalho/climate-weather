// import Image from "next/image"

export interface WeatherInformationProps {
    name: string
    country: string
    temp: string
    tempIcon: string
    windSpeed: string
    windAngle: number
    defaultShow?: boolean
}

export const WeatherInformation = ({
    defaultShow = false,
    name,
    country,
    temp,
    tempIcon = '10d@2x',
    windSpeed,
    windAngle,
}: WeatherInformationProps) => {
    return (
        <div
            className={`max-w-[40rem] min-w-full h-auto p-4 mt-12 border border-green-500 bg-green-700 rounded-xl hidden ${
                defaultShow ? '!block' : ''
            }`}
        >
            <div className="w-full p-5 text-lg font-bold text-white text-center">
                {' '}
                {name ? `${name}, ${country}` : '--'}{' '}
            </div>

            <div className="w-full flex">
                <div className="flex-1 text-center temperature">
                    <div className="mb-2 text-gray-200 font-bold">
                        {' '}
                        Temperatura{' '}
                    </div>

                    <div className="font-bold text-gray-300">
                        {temp || '--'}{' '}
                        <sup className="text-base font-normal">ºC</sup>
                    </div>

                    <img
                        className="inline"
                        src={
                            tempIcon
                                ? `https://openweathermap.org/img/wn/${tempIcon}.png`
                                : 'https://openweathermap.org/img/wn/10d@2x.png'
                        }
                        alt="Icone do clima"
                    />
                </div>

                <div className="flex-1 text-center wind">
                    <div className="mb-2 text-gray-200 font-bold"> Vento </div>

                    <div className="font-bold text-gray-300">
                        {windSpeed || '--'}{' '}
                        <span className="text-base font-normal">km/h</span>
                    </div>

                    <div className="weather-item__wrapper">
                        <div
                            className="w-4 h-px bg-gray-800 origin-left"
                            style={{
                                transform: `rotate(${windAngle - 90}deg)`,
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
