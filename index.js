const PSR_4 = 'psr-4';
const BASE_PATH = 'base_path';
const NAMESPACES = 'namespaces';
const DIRECTORY_SEPARATOR = "\\";

let autoloaded = {};

module.exports = (modulePath, basePath = null) => {

    // Set base path only first time for require.
    if(!autoloaded[BASE_PATH] && basePath)
    {
        autoloaded[BASE_PATH] = basePath;
    }

    if(typeof modulePath == 'object')
    {
        autoloaded[NAMESPACES] = modulePath;
    }
        else if (typeof modulePath == 'string')
    {
        if(autoloaded[NAMESPACES][PSR_4])
        {
            // split for any slash.
            let directories = modulePath.split(/[\/\\]/g);

            let namespace = directories[0];

            // todo: imaginate, this operation will execute every time on 'use' require. rework it !
            let namespaces = Object.keys(autoloaded[NAMESPACES][PSR_4]);

            for(let i = 0, _count = namespaces.length; i < _count; i++)
            {
                let registered = namespaces[i];

                if(! (new RegExp(namespace, "g")).test(registered))
                {
                    continue;
                }

                let path = modulePath.replace(registered.replace(/[\/\\]/g, ''), autoloaded[NAMESPACES][PSR_4][registered]);

                return require(autoloaded[BASE_PATH] + DIRECTORY_SEPARATOR + path);
            }
        }

        throw Error(`Can't find autoloaders doesn't exists.`);
    }

    return undefined;
}