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
