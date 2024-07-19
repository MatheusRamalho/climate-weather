import { ComponentPropsWithoutRef } from 'react'

export function StormIcon(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            width={44}
            height={43}
            viewBox="0 0 44 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M38.501 16.383c-.021 0-.04.006-.062.007a7.487 7.487 0 00-6.873-10.454 7.44 7.44 0 00-3.973 1.15C26.034 3.295 22.311.626 17.96.626c-5.753 0-10.417 4.664-10.417 10.417 0 .435.035.86.087 1.281-.03 0-.058-.004-.087-.004a6.984 6.984 0 100 13.969h30.958a4.953 4.953 0 100-9.907z"
                fill="#C2CEF2"
            />
            <path
                d="M20.138 29.364L18 36.04h2.948l-1.912 6.777L26 33.251h-3.595l1.36-3.887h-3.627z"
                fill="#FBDB60"
            />
        </svg>
    )
}
