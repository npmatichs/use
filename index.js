let autoloaders = {};
const NAMEPSACES = 'namespaces';
const PSR_4 = 'psr-4';
const DIRECTORY_SEPARATOR = '\\';

module.exports = (modulePath) => {

	if(typeof modulePath == 'object')
	{
		autoloaders = modulePath;
	} 
		else if (typeof modulePath == 'string')
	{		
		if(autoloaders[NAMEPSACES])
		{
			if(autoloaders[NAMEPSACES][PSR_4])
			{
				let directories = modulePath.split(DIRECTORY_SEPARATOR);

				console.log(directories);

				

				// return require()
			}

			throw Error(`Can't find ${PSR_4} autoloader namespaces.`);
		}

		throw Error("`namespaces` are missing in your package.json");
	}
}