export default function win_achieved(array) {
    let i;
    for (i = 0; i < 3; i++){
        if (array[i] === array[i+3] && array[i] === array[i+6] && array[i] !== "0") {
            return "Win"
        }
    }
    for (i = 0; i < 9; i = i +3){
        if (array[i] === array[i+1] && array[i] === array[i+2] && array[i] !== "0") {
            return "Win"
        }
    }
    if (array[0] === array[4] && array[0] === array[8] && array[0] !== "0") {
        return "Win"
    }
    if (array[2] === array[4] && array[2] === array[6] && array[2] !== "0") {
        return "Win"
    }

    if (array.every(arrayFilled)) {
        return "Draw"
    } else {
        return "Running"
    }
}

function arrayFilled(value) {
    return value !== "0"
}