export type Episodio = {
    id: number;
    codigo: string;
    nome: string;
    dataExibicao: string;
    comentario: string;
}

export const episodios: Episodio[] = [
    { id: 1, codigo: 'S01E01', nome: 'Pilot', dataExibicao: '02/12/2013', comentario: 'Onde tudo começa: a primeira aventura de Rick e Morty.'},
    { id: 2, codigo: 'S02E01', nome: 'A Rickle in Time', dataExibicao: '26/07/2015', comentario: 'A linha do tempo se divide e a tela vira várias.'},
    { id: 3, codigo: 'S03E03', nome: 'Pickle Rick', dataExibicao: '06/08/2017', comentario: 'Rick vira um picles para fugir da terapia em família.'},
];
