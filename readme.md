# Nodejs autoload namespaces module.

At momment support only psr-4 namespaces. Learn more about [psr-4](http://www.php-fig.org/psr/psr-4/)

[![Build Status](https://scrutinizer-ci.com/g/npmatichs/use/badges/build.png?b=master)](https://scrutinizer-ci.com/g/npmatichs/use/build-status/master)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/npmatichs/use/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/npmatichs/use/?branch=master)

# Install

SSH: 
``` 
npm install git+ssh://git@github.com:npmatichs/use.git --save
```

HTTP:

```
npm install git+http://github.com/npmatichs/use.git --save
```

# How to use

Register all your namespaces in your entry application script (index.js):
```
// package.json
{
	"namespaces" : 
	{
	    "psr-4" : {
	      	"Services\\" : "app\\services"
	    }
  	},
}

// !Obligatorily first require('use') must be from your root entry point to init base path !!!

// index.js
let autoloader = require('use/autoloader');
let packagejson = require('./package');

// Init namespaces and base path. You can create your config path if you don't want to put namesapces in package.json.
autoloader.setBasePath(__dirname);
autoloader.setNamespaces(packagejson['namespaces']);

``` 

Now somewhere in your project if you will need to require some module from namespace path, instead of ``` require('../../../../somepath/thefile')``` use:

```
let use = requre('use');

let MyService = use("Services/myService");
// same
let MyService = use("Services\myService");

```
it will ```require``` module based namespace which you registered at entry point js.