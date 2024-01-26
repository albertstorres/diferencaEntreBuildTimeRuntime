const soma = (a: number, b: number): number => {
    return a + b;
}

console.log(soma(5, 6));//RETORNA 11

const num1: number = 1;
const num2: number = 2;

console.log(soma(num1, num2));//RETORNA 3

const num3: any = 3;
const num4: any = "Olá";

console.log(soma(num3, num4));//RETORNA 3OLÁ SEM MENSAGEM DE ERRO. ANY INDUZ AO ERRO. 