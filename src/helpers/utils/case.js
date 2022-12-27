export function toCamel(o) {
    var newO, origKey, newKey, value
    if (o instanceof Array) {
        return o.map(function(value) {
            if (typeof value === "object") {
                value = toCamel(value)
            }
            return value
        })
    } else {
        newO = {}
        for (origKey in o) {
            if (o.hasOwnProperty(origKey)) {
                newKey = snakeToCamel(origKey)
                value = o[origKey]
                if (value instanceof Array || (value !== null && value.constructor === Object)) {
                    value = toCamel(value)
                }
                newO[newKey] = value
            }
        }
    }
    return newO
}

export function snakeToCamel(str) {
    if (!['-', '_'].some(e1 => str.includes(e1))) {
        return str
    }
    return str.toLowerCase().replace(/([-_][a-z])/g, group =>
        group
            .toUpperCase()
            .replace('-', '')
            .replace('_', '')
    )
}

export function camelToSnakeCase(str) {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}
