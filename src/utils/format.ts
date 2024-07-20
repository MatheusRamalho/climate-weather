import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function dateFormat(date: string | Date) {
    const formatter = new Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'long',
        timeStyle: 'short',
    })

    const formatted = formatter.format(
        date instanceof Date ? date : new Date(date),
    )

    return formatted
}

export function dateFormatDayOfWeek(dateSeconds: number) {
    const milliseconds = dateSeconds * 1000
    const dateObj = new Date(milliseconds)
    const dayOfWeek = format(dateObj, 'EEEE', { locale: ptBR })

    return dayOfWeek
}

export function qualifyAirQuality(aqi: number): {
    info: string
    description: string
} {
    switch (aqi) {
        case 1:
            return {
                info: 'Boa',
                description:
                    'A qualidade do ar é considerada satisfatória e apresenta baixo risco para a saúde.',
            }
        case 2:
            return {
                info: 'Moderada',
                description:
                    'A qualidade do ar é aceitável; no entanto, pode haver algum risco para grupos sensíveis.',
            }
        case 3:
            return {
                info: 'Insalubre para grupos sensíveis',
                description:
                    ' Membros de grupos sensíveis podem sentir efeitos à saúde.',
            }
        case 4:
            return {
                info: 'Insalubre',
                description:
                    'Todos podem começar a sentir efeitos na saúde. Grupos sensíveis podem enfrentar efeitos mais graves.',
            }
        case 5:
            return {
                info: 'Muito insalubre',
                description:
                    'A qualidade do ar pode afetar a saúde de todos, com riscos mais sérios para os grupos sensíveis.',
            }
        default:
            return {
                info: 'Valor de AQI inválido',
                description: '',
            }
    }
}
