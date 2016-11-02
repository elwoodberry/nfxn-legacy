## Routes
[Table Of Contents](../../README.md) / Routes

**Create 'routes' directory**
Inside this directory create the following files

	- **Index.js**
		
		Title
		```
		var express = require('express');
		```
		
		Title
		```
		var router = express.Router();
		```
		
		Title
		```
		router.get('/', function(req, res, next){  
			res.send('INDEX');  
		});  
		```
		
		Title
		```
		module.exports = router;
		```



	- **Main.js**
	```
	```
