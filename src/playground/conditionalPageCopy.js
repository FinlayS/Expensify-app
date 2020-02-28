var _ = require('lodash')

const conditionalErrorCopy = {
    brokerQuote: {
        equifaxThinFile: {
            titleError: 'Uh-oh... we can’t seem to find your client at that address',
            titleReason: "",
            textResolution: "Please try again and make sure you’ve entered their details correctly, including their most up to date address. If they’ve recently moved, it might worth trying their previous address.",
            textContactUs: ""
        }
    },
    directQuote: {
        equifaxThinFile: {
            titleError: "Uh-oh... we can’t seem to find you at that address",
            titleReason: "",
            textResolution: "Please try again and make sure you’ve entered your details correctly, including your most up to date address. If you’ve recently moved, it might worth trying your previous address.",
            textContactUs: "If you’re still having problems we’ll be more than happy to help."
        }
    },
    genericError: {
        titleError: "Oops! Something went wrong.",
        titleReason: "We are experiencing some technical difficulties",
        textResolution: "We’re sorry, we are experiencing some technical difficulties and we weren’t able to create an instant quote for you right now, but that doesn’t necessarily mean we can’t lend to you.",
        textContactUs: "Please try again later and if you’re still having trouble, give us a call on the number below."
    }
}

export const getConditionalErrorCopy = (sourcePage, copy) => {
    return _.get(
        conditionalErrorCopy,
        [sourcePage, _.camelCase(copy)],
        conditionalErrorCopy.genericError
    )
};