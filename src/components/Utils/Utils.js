import { format as formatDate, formatDistance } from 'date-fns'

export function buffTo64(buffer) {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    for (var i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}

export function NiceDate({ date, format='yyyy M d h m s' }) {
    let formatted = formatDate(date, format)
    let result = ['']
    let char = ' '

    for (let i = 0; i < formatted.length; i++) {
        if (formatted[i] === char) {
            result.push('')
        } else {
            result[result.length-1] += formatted[i]
        }
    }
    
    let rightNow = new Date()
    let formattedNow = formatDate(rightNow, format)
    let resultNow = ['']

    for (let i = 0; i < formattedNow.length; i++) {
        if (formattedNow[i] === char) {
            resultNow.push('')
        } else {
            resultNow[resultNow.length-1] += formattedNow[i]
        }
    }

    let userDisplayDate = formatDistance(
        new Date(parseInt(result[0]), parseInt(result[1]), parseInt(result[2]),
            parseInt(result[3]), parseInt(result[4]), parseInt(result[5])),
        new Date(parseInt(resultNow[0]), parseInt(resultNow[1]), parseInt(resultNow[2]), 
            parseInt(resultNow[3]), parseInt(resultNow[4]), parseInt(resultNow[5])),
        { includeSeconds: true, addSuffix: true }
    )

    return userDisplayDate
}