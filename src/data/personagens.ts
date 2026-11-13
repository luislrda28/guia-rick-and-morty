export type Personagem = {
    id: number;
    nome: string;
    status: string;
    especie: string;
    origem: string;
}

export const personagens: Personagem[] = [
    { id: 1, nome: 'Rick Sanchez', status: 'vivo', especie: 'Humano', origem: 'Terra (C-137)'},
    { id: 2, nome: 'Morty Smith', status: 'vivo', especie: 'Humano', origem: 'Desconhecida'},
    { id: 3, nome: 'Summer Smith', status: 'vivo', especie: 'Humano', origem: 'Terra (Dimensão Substituta)'},
    { id: 4, nome: 'Beth Smith', status: 'vivo', especie: 'Humano', origem: 'Terra (Dimensão Substituta)'},
    { id: 5, nome: 'Jerry Smith', status: 'vivo', especie: 'Humano', origem: 'Terra (Dimensão Substituta)'},
    { id: 6, nome: 'Abadango Cluster Princess', status: 'vivo', especie: 'Alienígena', origem: 'Abadango'},
    { id: 7, nome: 'Abradolf Lincler', status: 'desconhecido', especie: 'Humano', origem: 'Terra (Dimensão Substituta)'},
    { id: 8, nome: 'Adjudicator Rick', status: 'morto', especie: 'Humano', origem: 'Desconhecida'},
    { id: 9, nome: 'Agency Director', status: 'morto', especie: 'Humano', origem: 'Terra (Dimensão Substituta)'},
    { id: 10, nome: 'Alan Rails', status: 'morto', especie: 'Humano', origem: 'Desconhecida'},
];
