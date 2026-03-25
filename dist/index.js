import { Exam } from './Exam.js';
const respostasDoAluno = [
    { numero: 1, respostas: 'a' },
    { numero: 2, respostas: 'b' },
    { numero: 3, respostas: 'b' },
    { numero: 4, respostas: 'b' },
    { numero: 5, respostas: 'b' }
];
const provaAluno = new Exam(respostasDoAluno);
const nota = provaAluno.calcularNota();
console.log(`A nota final do aluno é: ${nota.toFixed(1).replace('.', ',')}`);
//# sourceMappingURL=index.js.map