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
 * @function Validates the given page with the rules described in the function
 * @name jsdomCustomValidationFunction
 * @param {object} window The HTML DOM window object
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
/** @type jsdomCustomValidationFunction */
var jsdomCustomValidationFunction = function (window) {
    return new Promise(function(resolve, reject) {
        /* Initialize result object | Array of MessageItems */
        var result = [];
        /* get JQuery object */
        var $ = window.$;
    
        /* Try to validate, catch all errors */
        try {
            var backgroundColor = window.$('body').css("background-color");
            if (backgroundColor && backgroundColor != "rgb(255, 255, 255)") {
                result.push({status: true, type: 'simple', message: "T0002"});
            } else {
                result.push({status: false, type: 'complex', message: {problemText: "T0003", solutionHint: "T0004"}});
            }
            /* Return */
            resolve(result);
        } catch (e) {
            /* Get error message to help debugging */
            result.push({status: false, type: 'simple', message: e.message + ' ' + e.stack});
            /* Return */
            reject(result);
        }
    });
};

/* ------------------------------ Module body ------------------------------- */
/* ----------------------------- Module exports ----------------------------- */
/** @type {validationDescriptor} */
module.exports = {
    /** @type string */
    validationMethod: 'JSBinUrlWithCustomFunction',
    /** @type customMessages */
    customMessages: null,
    /** @type jsdomCustomValidationFunction */
    validationFunction: jsdomCustomValidationFunction
};