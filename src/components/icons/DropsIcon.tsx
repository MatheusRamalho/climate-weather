import { ComponentPropsWithoutRef } from 'react'

export function DropsIcon(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            width={20}
            height={25}
            viewBox="0 0 20 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g fill="#fff">
                <path d="M.27 21.084a2.732 2.732 0 004.925 2.367c.654-1.36-.044-6.216-.044-6.216s-4.227 2.49-4.88 3.85zM7.56 21.084a2.732 2.732 0 004.925 2.367c.653-1.36-.044-6.216-.044-6.216s-4.228 2.49-4.881 3.85zM10.67 14.648c.654-1.36-.044-6.216-.044-6.216s-4.227 2.49-4.88 3.85a2.732 2.732 0 004.925 2.367zM14.958 15.927a2.732 2.732 0 003.646-1.279c.654-1.36-.044-6.216-.044-6.216s-4.227 2.49-4.88 3.85a2.73 2.73 0 001.278 3.645zM17.38 6.549c.654-1.36-.043-6.216-.043-6.216s-4.228 2.488-4.882 3.848A2.732 2.732 0 1017.38 6.55zM19.231 17.235s-4.227 2.49-4.881 3.85a2.73 2.73 0 104.925 2.366c.654-1.36-.044-6.216-.044-6.216z" />
            </g>
        </svg>
    )
}
