const PSR_4 = 'psr-4';

let autoloaded = {};

module.exports = (modulePath) => {

    if(typeof modulePath == 'object')
    {
        autoloaded = modulePath;
    }
        else if (typeof modulePath == 'string')
    {
        // console.log(autoloaders);

        if(autoloaded[PSR_4])
        {
            // split for any slash.
            let directories = modulePath.split(/[\/\\]/g);

            let namespace = directories[0];

            // todo: imaginate, this operation will execute every time on 'use' require. rework it !
            let registeredNamespaces = Object.keys(autoloaded[PSR_4]);

            let regularForNamespace = new RegExp(namespace, "g")

            for(let i = 0, _count = registeredNamespaces.length; i < _count; i++)
            {
                let registered = registeredNamespaces[i];

                if(! regularForNamespace.test(registered))
                {
                    continue;
                }

                let psrModulePath = modulePath.replace(registered, autoloaded[PSR_4][registered]);

                // buggy.
                return require.main.require(psrModulePath);
            }
        }

        throw Error(`Can't find autoloaders doesn't exists.`);
    }

    return void 0;
}