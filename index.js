const PSR_4 = 'psr-4';
const DIRECTORY_SEPARATOR = "\\";
let autoloader = require('./autoloader')

module.exports = (modulePath) => {
    let namespaces = autoloader.getNamespaces();
    let psr_4 = namespaces[PSR_4];

    // look for PSR-4 namespaces
    if(psr_4)
    {
        // split for any slash.
        let directories = modulePath.split(/[\/\\]/g);
        let namespace = directories[0];
        let key = autoloader.simplifyNamespace(namespace);
        let indexed = autoloader.getIndexedNamespaces();

        if(indexed[key])
        {
            let path = modulePath.replace(indexed[key].replace(/[\/\\]/g, ''), psr_4[indexed[key]]);

            let basePath = autoloader.getBasePath();

            if(basePath)
            {
                return require(basePath + DIRECTORY_SEPARATOR + path);
            }
        }

        throw Error(`Base path is undefined, please reinit the module settings.`);
    }

    throw Error(`Can't find namespaces.`);
}