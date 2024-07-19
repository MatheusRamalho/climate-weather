import { ReactNode } from 'react'

import { CloseIcon } from './icons/CloseIcon'

interface DialogProps {
    title: string
    description: string
    onClose: () => void
    children: ReactNode
}

export function Dialog({ title, description, onClose, children }: DialogProps) {
    return (
        <div className="z-20 fixed inset-0 size-full p-4 bg-primary-800/50 backdrop-blur flex items-center justify-center">
            <div className="w-full max-w-[640px] rounded-xl py-5 px-6 bg-primary-800 shadow-2xl border-2 border-primary-700 space-y-10">
                <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                        <h2 className="text-lg font-semibold text-primary-100">
                            {title}
                        </h2>

                        <button
                            type="button"
                            onClick={onClose}
                            className="size-5 rounded-sm bg-primary-500 hover:bg-secondary-500 flex items-center justify-center"
                        >
                            <CloseIcon className="size-3" />
                        </button>
                    </div>

                    <p className="text-zinc-200 text-sm text-left">
                        {description}
                    </p>
                </div>

                {children}
            </div>
        </div>
    )
}
