/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Owner: CodeBerry
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* -------------------------- Module requirements --------------------------- */
var Promise = require('promise');
/* --------------------------- JSDOC definitions ---------------------------- */
/**
 * @name messageItem
 * @property {boolean} status The message success message: true.
 * @property {string} type The message type (simple / complex).
 * @property {string|{problemText: string, solutionHint: string}} message The simple / complex message.
 * @property {Array} [messageParams] Optional params for the message to be built
 */

/**
 * @name customMessages
 * @property {messageItem} successMessage The custom success message.
 * @property {messageItem} failureMessage The custom failure message.
 */

/**
 * @function Validates the the user input with the rules described in the function
 * @name internalCustomValidationFunction
 * @param {string} userInput The user input
 * @returns {Promise.<Array<messageItem>>} result The validation result
 */

/**
 * @name validationDescriptor
 * @property {string} validationMethod The validation method
 * @property {customMessages} customMessages Optional Custom messages for the validation
 * @property {function} [validationFunction] Optional The custom validation function
 * @property {Array} [validStringList] Optional valid string list for oneOfList validation
 * @property {string} [subString] Optional The substring to match containsString validation
 */

/* ---------------------------- Module functions ---------------------------- */
/** @type internalCustomValidationFunction */
var internalCustomValidationFunction = function (userInput) {
    return new Promise(function(resolve, reject) {
        /* Initialize result object | Array of MessageItems */
        var result = [];
        /* Try to validate, catch all errors */
        try {
            var request = require('request');
    
            /* Assemble github url from the user name */
            var url = 'https://github.com/' + userInput.replace(/^\s+|\s+$/g, '');
            var requestJson = {
                    rejectUnauthorized: false,
                    url: url,
                    method: "GET"
            };
            
            /* Call site */
            request(requestJson, function (error, response, body) {
                if (error) {
                    result.push({status: false, type: 'simple', message: "T0000", messageParams: [url]});
                    resolve(result);
                } else if (response.statusCode == 200){
                    result.push({status: true, type: 'simple', message: "T0001", messageParams: [url]});
                    resolve(result);
                } else {
                    result.push({status: false, type: 'simple', message: "T0000", messageParams: [url]});
                    resolve(result);
                }
            });
        } catch (e) {
            result.push({status: false, type: 'simple', message: e.message + ' ' + e.stack});
            reject(result);
        }
    });
};

/* ------------------------------ Module body ------------------------------- */
/* ----------------------------- Module exports ----------------------------- */
/** @type {validationDescriptor} */
module.exports = {
    /** @type string */
    validationMethod: 'internalCustomFunction',
    /** @type customMessages */
    customMessages: null,
    /** @type internalCustomValidationFunction */
    validationFunction: internalCustomValidationFunction
};