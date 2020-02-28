import { path } from 'ramda'
import variables from './variables'

export const setVariableCopy = (route, pathToCopy) =>
    path([route, pathToCopy], variables);

const sourceRoute = "";
const errorDescription = "EQUIFAX";
let errorCopy;

if (sourceRoute && errorDescription === "EQUIFAX") {
    errorCopy = setVariableCopy(sourceRoute,"thinFileError")
} else {
    errorCopy = setVariableCopy("defaultError","genericError")
}

console.log(errorCopy)
