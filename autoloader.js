const BASE_PATH = 'base_path';
const NAMESPACES = 'namespaces';
const PSR_4 = 'psr-4';

let autoloaded = {}
let indexedNamespaces = {};

/**
 * Setter base path of application.
 *
 * @param {String} dirname
 * @exports {Function}
 */
exports.setBasePath = (dirname) => {
	autoloaded[BASE_PATH] = dirname;
}

/**
 * Setter namespaces of application.
 *
 * @param {Object} namespaces
 * @exports {Fucntion}
 */
exports.setNamespaces = (namespaces) => {
	autoloaded[NAMESPACES] = namespaces;

	// index PSR-4 namespaces
	if(typeof namespaces == 'object')
	{
		let _keys = Object.keys(namespaces[PSR_4]);

		for(let i = 0, _count = _keys.length; i < _count; i++)
		{
			indexedNamespaces[module.exports.simplifyNamespace(_keys[i])] = _keys[i];
		}
	}
}

/**
 * Get autoloaded namespace.
 *
 * @exports {Function}
 */
exports.getAutoloaded = () => {
	return autoloaded;
}

/**
 * Get base path of application
 *
 * @exports {Function}
 */
exports.getBasePath = () => {
	return autoloaded[BASE_PATH];
}

/**
 * Get autoloaded namespaces.
 *
 * @exports {Function}
 */
exports.getNamespaces = () => {
	return autoloaded[NAMESPACES];
}

/**
 * Get indexed namespaces.
 *
 * @exports {Function}
 */
exports.getIndexedNamespaces = () => {
	return indexedNamespaces;
}

/**
 * Get indexed namespaces.
 *
 * @param {String} namespace Namespace name.
 * @exports {Function|Error}
 */
exports.simplifyNamespace = (namespace) => {
	if(namespace)
	{
		return namespace.replace(/[\/\\]/g, '').toLowerCase();
	}

	throw Error(`Invalid namespace ${namespace}`);
}