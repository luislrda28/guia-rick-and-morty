import type { Status } from "../../data/status"

type FiltroStatusProps = {
    listaStatus: Status[]
    statusAtivo: string
    onSelecionarStatus: (alias: string) => void
}

export function FiltroStatus({
    listaStatus,
    statusAtivo,
    onSelecionarStatus
}: FiltroStatusProps) {
    return (
        <div className="filtros">
            { listaStatus.map(( status ) => (
                <button
                    key={status.alias}
                    type="button"
                    className={"filtro filtro-" + status.alias + (status.alias == statusAtivo ? " ativo" : "")}
                    onClick={() => onSelecionarStatus(status.alias)}
                >
                    { status.label }
                </button>
            )) }
        </div>
    )
}
