

export const isEmpty = (value) => {
    if (value === '') {
        return true
    }
    else if (value === null) {
        return true
    }
    else if (value === undefined) {
        return true
    }
    else if (value == null) {
        return true
    } else if(value == "undefined") {
        return true
    }
    else if (value == undefined) {
        return true
    } else if (typeof value === undefined) {
        return true
    } else if (!value) {
        return true
    } else if (value && value.length === 0) {
        return true
    } else {
        return false
    }
}