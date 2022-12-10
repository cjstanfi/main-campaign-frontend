import {InvalidPropertyError, RequiredParameterError, UniqueConstraintError} from "./error.js";

export default function makeHttpsError ({ statusCode, errorMessage }) {
    return {
        headers: {
            'Content-Type': 'application/json'
        },
        statusCode,
        result: JSON.stringify({
            success: false,
            error: errorMessage
        })
    }
}

//TODO: Add more error codes. Need: Invalid Data, Not Found
export function createErrorStatusCode(e){
    return e instanceof UniqueConstraintError
        ? 409
        : e instanceof InvalidPropertyError ||
        e instanceof RequiredParameterError
            ? 400
            : 500
}
