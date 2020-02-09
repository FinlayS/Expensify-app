import { path } from 'ramda'
import variables from './variables'

const setVariableCopy = (pathToCopy) =>
    path([route, pathToCopy], variables);

const route = "brokerError";
const errorDescription = "EQUIFAX";
let errorCopy;

if (errorDescription === "EQUIFAX") {
    errorCopy = setVariableCopy("thinFileError")
} else {
    errorCopy = variables.genericError
}

console.log(errorCopy)
