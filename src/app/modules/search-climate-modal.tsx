import { FormEvent } from 'react'

import { Dialog } from '@/components/Dialog'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

interface SearchClimateModalProps {
    closeSearchClimateModal: () => void
    setCityName: (cityName: string) => void
    searchClimateCity: (event: FormEvent<HTMLFormElement>) => void
}

export function SearchClimateModal({
    closeSearchClimateModal,
    setCityName,
    searchClimateCity,
}: SearchClimateModalProps) {
    return (
        <Dialog
            title="Pesquisar clima"
            description="Por favor, informe o nome da cidade que deseja consultar o clima."
            onClose={closeSearchClimateModal}
        >
            <form onSubmit={searchClimateCity} className="space-y-4">
                <Input
                    name="name"
                    type="text"
                    placeholder="Nome da cidade"
                    onChange={(event) => setCityName(event.target.value)}
                />

                <Button
                    name="Consultar clima"
                    type="submit"
                    className="w-full"
                />
            </form>
        </Dialog>
    )
}
