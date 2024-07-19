import axios from 'axios'

import { API_URL_BASE } from '@/constants/open-weather'

export const api = axios.create({
    baseURL: API_URL_BASE,
})
