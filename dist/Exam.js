import { gabaritoProva } from "./Weight.js";
export class Exam {
    constructor(respostas) {
        this.respostasAluno = respostas;
    }
    calcularNota() {
        let notaFinal = 0;
        this.respostasAluno.forEach(respAluno => {
            const Gabarito = gabaritoProva.find(q => q.numero === respAluno.numero);
            if (Gabarito && respAluno.respostas === Gabarito.respostaCorreta) {
                notaFinal += Gabarito.peso;
            }
        });
        return notaFinal;
    }
}
//# sourceMappingURL=Exam.js.map