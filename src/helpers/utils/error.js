export class UniqueConstraintError extends Error {
    constructor (value) {
        super(`${value} must be unique.`)

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, UniqueConstraintError)
        }
    }
}

export class InvalidPropertyError extends Error {
    constructor (msg) {
        super(msg)

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, InvalidPropertyError)
        }
    }
}

export class RequiredParameterError extends Error {
    constructor (param) {
        super(`${param} can not be null or undefined.`)

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, RequiredParameterError)
        }
    }
}

export class EmptyArrayError extends Error {
    constructor () {
        super(`Array returned empty because requested data is not in database.`)

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, EmptyArrayError)
        }
    }
}
