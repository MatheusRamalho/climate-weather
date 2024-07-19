import { ComponentPropsWithoutRef } from 'react'

export function CloseIcon(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            width={12}
            height={12}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g
                stroke="#C2CEF2"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M11 1L1 11M1 1l10 10" />
            </g>
        </svg>
    )
}
