import { ComponentPropsWithoutRef } from 'react'

export function CloudIcon(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            width={48}
            height={29}
            viewBox="0 0 48 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M42.304 17.57c-.024 0-.046.006-.07.006a8.346 8.346 0 00-7.663-11.654 8.29 8.29 0 00-4.429 1.28C28.404 2.978 24.252 0 19.402 0 12.986 0 7.786 5.203 7.786 11.617c0 .483.04.958.097 1.428-.033 0-.064-.006-.097-.006a7.788 7.788 0 000 15.575h34.517a5.523 5.523 0 100-11.044z"
                fill="#fff"
            />
        </svg>
    )
}
