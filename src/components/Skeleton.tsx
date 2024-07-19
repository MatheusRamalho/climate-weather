import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface SkeletonProps {
    className: string
    children?: ReactNode
}

export function Skeleton({ className, children }: SkeletonProps) {
    return (
        <div
            data-testid="skeleton"
            className={twMerge(
                'bg-primary-500 rounded animate-pulse',
                className,
            )}
        >
            {children}
        </div>
    )
}
