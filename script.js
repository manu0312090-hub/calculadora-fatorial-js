/**
 * Calcula o fatorial de um número inteiro não negativo.
 * @param {number} n - O número para calcular o fatorial.
 * @returns {number} O fatorial de n. Retorna 1 se n for 0. Retorna 'Número deve ser inteiro e não negativo' se inválido.
 */
function calcularFatorial(n) {
    // 1. Validar a entrada
    if (!Number.isInteger(n) || n < 0) {
      return 'Número deve ser inteiro e não negativo';
    }
  
    // 2. Casos base: 0! = 1 e 1! = 1
    if (n === 0 || n === 1) {
      return 1;
    }
  
    // 3. Cálculo iterativo












    
    let resultado = 1;
    for (let i = n; i >= 2; i--) {
      resultado *= i;
    }
  
    return resultado;
  }
  
  // Exemplos de uso (opcional, para testar)
  console.log(`Fatorial de 5: ${calcularFatorial(5)}`); // Saída: Fatorial de 5: 120
  console.log(`Fatorial de 0: ${calcularFatorial(0)}`); // Saída: Fatorial de 0: 1
  console.log(`Fatorial de 7: ${calcularFatorial(7)}`); // Saída: Fatorial de 7: 5040
  console.log(`Fatorial de -2: ${calcularFatorial(-2)}`); // Saída: Número deve ser inteiro e não negativo
