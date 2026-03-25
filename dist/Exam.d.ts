export interface RespostaAluno {
    numero: number;
    respostas: string;
}
export declare class Exam {
    private respostasAluno;
    constructor(respostas: RespostaAluno[]);
    calcularNota(): number;
}
//# sourceMappingURL=Exam.d.ts.map