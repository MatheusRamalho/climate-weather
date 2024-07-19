import { ComponentPropsWithoutRef } from 'react'

export function PinIcon(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            width={12}
            height={14}
            viewBox="0 0 12 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M5.833 4.167c-.916 0-1.666.75-1.666 1.666 0 .917.75 1.667 1.666 1.667.917 0 1.667-.75 1.667-1.667 0-.916-.75-1.666-1.667-1.666zm0-4.167c2.725 0 5.834 2.05 5.834 5.958 0 2.484-1.775 5.1-5.325 7.825a.826.826 0 01-1.017 0C1.775 11.05 0 8.442 0 5.958 0 2.05 3.108 0 5.833 0z"
                fill="#9D99E4"
            />
        </svg>
    )
}
