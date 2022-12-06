import { RequiredParameterError } from './error.js'

export default function requiredParam (param) {
    throw new RequiredParameterError(param)
}
