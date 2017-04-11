const PSR_4 = 'psr-4';
const DIRECTORY_SEPARATOR = "\\";
let autoloader = require('./autoloader')

module.exports = (modulePath) => {
    let namespaces = autoloader.getNamesapces();

    // look for PSR-4 namespaces
    if(namespaces[PSR_4])
    {
        // split for any slash.
        let directories = modulePath.split(/[\/\\]/g);

        let namespace = directories[0];

        let namespacesKeys = Object.keys(namespaces[PSR_4]);

        for(let i = 0, _count = namespacesKeys.length; i < _count; i++)
        {
            let registered = namespacesKeys[i];

            if(! (new RegExp(namespace, "g")).test(registered))
            {
                continue;
            }

            let path = modulePath.replace(registered.replace(/[\/\\]/g, ''), namespaces[PSR_4][registered]);

            let basePath = autoloader.getBasePath();

            if(basePath)
            {
                return require(basePath + DIRECTORY_SEPARATOR + path);
            }

            throw Error(`Base path is undefined, please reinit the module settings.`);
        }
    }

    throw Error(`Can't find namespaces.`);
}