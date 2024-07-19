import { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    name: string
    className?: string
}

export function Button({ name, className, ...rest }: ButtonProps) {
    return (
        <button
            className={twMerge(
                'cursor-pointer h-12 px-5 py-2 rounded-lg font-medium flex items-center justify-center gap-2 bg-primary-gradient text-white border border-primary-800 shadow-lg hover:shadow',
                className,
            )}
            {...rest}
        >
            {name}
        </button>
    )
}
