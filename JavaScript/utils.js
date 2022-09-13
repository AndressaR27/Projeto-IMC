export function isNumber(value){
    const isNotANumber = isNaN(value) || value == ""
    return isNotANumber //Se retornar true não é um número
}


export function calculateIMC (weight, height){
    return (weight / ((height / 100) ** 2)).toFixed(2)
};
