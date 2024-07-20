import { API_KEY, API_LANG, API_METRIC } from '@/constants/open-weather'
import { api } from '@/libs/axios'

export interface getAirPollutionParams {
    latitude: number
    longitude: number
}

export interface getAirPollutionResponse {
    coord: {
        lon: number
        lat: number
    }
    list: [
        {
            main: {
                aqi: number
            }
            components: {
                co: number
                no: number
                no2: number
                o3: number
                so2: number
                pm2_5: number
                pm10: number
                nh3: number
            }
            dt: number
        },
    ]
}

export async function getAirPollution({
    latitude,
    longitude,
}: getAirPollutionParams): Promise<getAirPollutionResponse> {
    const response = await api.get<getAirPollutionResponse>(
        `air_pollution?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=${API_METRIC}&lang=${API_LANG}`,
    )

    return response.data
}

// http://api.openweathermap.org/data/2.5/air_pollution?lat=-3.3642&lon=-46.7406&appid=eeaccb51452695fb012d18076727e28b&units=metric&lang=pt_br
