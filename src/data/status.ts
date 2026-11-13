export type Status = {
    alias: string;
    label: string;
}

export const listaStatus: Status[] = [
    { alias: 'todos', label: 'Todos'},
    { alias: 'vivo', label: 'Vivo'},
    { alias: 'morto', label: 'Morto'},
    { alias: 'desconhecido', label: 'Desconhecido'},
];
