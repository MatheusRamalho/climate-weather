import { ComponentPropsWithoutRef } from 'react'

export function LeafIcon(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            width={20}
            height={19}
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M15 5C6 7 3.9 13.17 1.82 18.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C17 17 20 0 20 0c-1 2-8 2.25-13 3.25S0 8.5 0 10.5s1.75 3.75 1.75 3.75C5 5 15 5 15 5z"
                fill="#DAD8F7"
            />
        </svg>
    )
}
