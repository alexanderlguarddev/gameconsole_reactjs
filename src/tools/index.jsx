export const roundValue = (value, decimals) => {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals)
}

export const addZerosValues = (value) => {
    const num = `${value}`;

    const lines = num.split('.')

    if (lines.length == 1) return num + '00'
    else if (lines[1].length == 1) return num + '0'
    else return num
}