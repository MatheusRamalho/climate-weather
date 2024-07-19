import { API_KEY, API_LANG, API_METRIC } from '@/constants/open-weather'
import { api } from '@/libs/axios'

export interface getAirParams {
    cityName: string
}

export interface getAirResponse {
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

export async function getAir({
    cityName,
}: getAirParams): Promise<getAirResponse> {
    const response = await api.get<getAirResponse>(
        `air_pollution?q=${encodeURI(cityName)}&appid=${API_KEY}&units=${API_METRIC}&lang=${API_LANG}`,
    )

    return response.data
}

// http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={your_api_key}
