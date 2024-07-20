import { API_KEY, API_LANG, API_METRIC } from '@/constants/open-weather'
import { api } from '@/libs/axios'

export interface getForecastParams {
    cityName: string
}

export interface getForecastResponse {
    cod: string
    message: number
    cnt: number
    city: {
        id: number
        name: string
        coord: {
            lat: number
            lon: number
        }
        country: string
        population: number
        timezone: number
        sunrise: number
        sunset: number
    }
    list: {
        dt: number
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
        weather: [
            {
                id: number
                main: string
                description: string
                icon: string
            },
        ]
        clouds: {
            all: number
        }
        wind: {
            speed: number
            deg: number
            gust: number
        }
        visibility: number
        pop: number
        sys: {
            pod: string
        }
        dt_txt: string
    }[]
}

export async function getForecast({
    cityName,
}: getForecastParams): Promise<getForecastResponse> {
    const response = await api.get<getForecastResponse>(
        `forecast?q=${cityName}&cnt=7&appid=${API_KEY}&units=${API_METRIC}&lang=${API_LANG}`,
    )

    return response.data
}
