/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Owner: CodeBerry
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* -------------------------- Module requirements --------------------------- */
/* --------------------------- JSDOC definitions ---------------------------- */
/**
 * @name messageItem
 * @property {boolean} status The message success message: true.
 * @property {string} type The message type (simple / complex).
 * @property {string|{problemText: string, solutionHint: string}} message The simple / complex message.
 */

/**
 * @name customMessages
 * @property {messageItem} successMessage The custom success message.
 * @property {messageItem} failureMessage The custom failure message.
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
/* ------------------------------ Module body ------------------------------- */
/* ----------------------------- Module exports ----------------------------- */
/** @type {validationDescriptor} */
module.exports = {
    /** @type string */
    validationMethod: 'isJSBinUrl',
    /** @type customMessages */
    customMessages: null
};