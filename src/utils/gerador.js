
export function gerador(qtd) {
    let numeros = []
    let randomNum
    const min = 1
    const max = 60
    let i = 0
    if(qtd > 60) {
        return numeros
    }
    while(i < qtd) {
        randomNum = Math.floor(Math.random() * (max - min + 1)) + min
        if (!numeros.includes(randomNum)) {
            numeros = [...numeros, randomNum]
            i++
        }
    }
    
    numeros = numeros.sort((a,b) => {
        return a - b
    })
    return numeros
}
