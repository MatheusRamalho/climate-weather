import { API_KEY, API_LANG, API_METRIC } from '@/constants/open-weather'
import { api } from '@/libs/axios'

export interface getWeatherParams {
    cityName: string
}

export interface getWeatherResponse {
    coord: {
        lon: number
        lat: number
    }
    weather: [
        {
            id: number
            main: string
            description: string
            icon: string
        },
    ]
    base: string
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
    visibility: number
    wind: {
        speed: number
        deg: number
        gust: number
    }
    clouds: {
        all: number
    }
    dt: number
    sys: {
        type: number
        id: number
        country: string
        sunrise: number
        sunset: number
    }
    timezone: number
    id: number
    name: string
    cod: number
}

export async function getWeather({
    cityName,
}: getWeatherParams): Promise<getWeatherResponse> {
    const response = await api.get<getWeatherResponse>(
        `weather/?q=${cityName}&appid=${API_KEY}&units=${API_METRIC}&lang=${API_LANG}`,
    )

    return response.data
}
