export interface Response {
    codigo: string,
    nome: string,
    modelos: {
        modelos: modelos[]
    },
    AnoModelo: string,
    Marca: string,
    Modelo: string,
    Valor: string
}

interface modelos {
    codigo: number,
    nome: string
}