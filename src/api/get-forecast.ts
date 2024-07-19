import { API_KEY, API_LANG, API_METRIC } from '@/constants/open-weather'
import { api } from '@/libs/axios'

export interface getForecastParams {
    cityName: string
}

export interface getForecastResponse {
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

export async function getForecast({
    cityName,
}: getForecastParams): Promise<getForecastResponse> {
    const response = await api.get<getForecastResponse>(
        `forecast/daily?q=${encodeURI(cityName)}&cnt=7&appid=${API_KEY}&units=${API_METRIC}&lang=${API_LANG}`,
    )

    return response.data
}

// https://api.openweathermap.org/data/2.5/forecast?q=caieiras&cnt=7&appid=eeaccb51452695fb012d18076727e28b&units=metric&lang=pt_br
// qualidade do ar
// air_pollution?lat={lat}&lon={lon}&appid={your_api_key}
