const NAMEPSACES = 'namespaces';
const PSR_4 = 'psr-4';
// const PSR_0 = 'psr-0';
const DIRECTORY_SEPARATOR = '\\';

module.exports = (modulePath) => {
	// look for main package.json;
	let packageJson = require.main.require('package');
	
	if(typeof packageJson == 'object')
	{
		if(packageJson[NAMEPSACES])
		{
			if(packageJson[NAMEPSACES][PSR_4])
			{
				let directories = modulePath.split(DIRECTORY_SEPARATOR);

				console.log(directories);
			}
		}
	}

	return require(modulePath);
}