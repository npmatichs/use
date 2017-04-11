const BASE_PATH = 'base_path';
const NAMESPACES = 'namespaces';

let autoloaded = {}

/**
 * Setter base path of application.
 *
 * @param {String} dirname
 * @return {undefined}
 */
exports.setBasePath = (dirname) => {
	autoloaded[BASE_PATH] = dirname;
}

/**
 * Setter namespaces of application.
 *
 * @param {Object} namespaces
 * @return {undefined}
 */
exports.setNamespaces = (namespaces) => {
	autoloaded[NAMESPACES] = namespaces;
}

/**
 * Get autoloaded namespace.
 *
 * @return {Object}
 */
exports.getAutoloaded = () => {
	return autoloaded;
}

/**
 * Get base path of application
 *
 * @return {String}
 */
exports.getBasePath = () => {
	return autoloaded[BASE_PATH];
}

/**
 * Get autoloaded namepsaces.
 *
 * @return {Object}
 */
exports.getNamesapces = () => {
	return autoloaded[NAMESPACES];
}