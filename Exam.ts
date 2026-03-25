import { type Gabarito, gabaritoProva } from "./Weight.js";

export interface RespostaAluno{
    numero: number;
    respostas: string;
}

export class Exam{
    private respostasAluno:  RespostaAluno [];

    constructor (respostas: RespostaAluno[]){
        this.respostasAluno = respostas;
    }

    public calcularNota(): number{
        let notaFinal = 0;

        this.respostasAluno.forEach(respAluno => {
            const Gabarito = gabaritoProva.find(q => q.numero === respAluno.numero);

            if (Gabarito && respAluno.respostas === Gabarito.respostaCorreta){
                notaFinal += Gabarito.peso
            }
        });

        return notaFinal;
    }
}