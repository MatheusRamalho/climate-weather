import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
}

export function Input({ name, ...rest }: InputProps) {
    return (
        <div className="">
            <div className="h-14 px-4 bg-primary-300 border border-primary-700 rounded-lg flex items-center gap-2">
                <input
                    {...rest}
                    id={name}
                    name={name}
                    className="flex-1 h-10 bg-transparent rounded-md text-lg outline-none text-primary-800 placeholder:text-primary-500 placeholder:text-sm"
                />
            </div>
        </div>
    )
}
