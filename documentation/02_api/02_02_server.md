## Server.js
[Table Of Contents](../../README.md) / Server.js  

Create the entry point, 'server.js'

1. Dependecies
   - **Express**  
   Bring in Express from the node modules folder  

   - **Path**  
   A system module. Installing it seperatly is not needed. Used for file system pathes  

   - **Body Parser**  
   Parses JSON

   Example  
   ```
   var express = require('express');  
   var path = require('path');  
   var bodyParser = require('');  
   ```

2. Routes  
   - **Index**  
   The home page.

   Example  
   ```
   var index = require('./routes/index');  
   ```  

3. The '**app**' variable  
   - **Express**
   Set our main app variable to Express

   Example
   ```
   var app = express(); 
   ```

4. View Engine  

   - 'What folder do you want to use to store your views?'  
   ```  
   app.set('views', path.join(__dirname, 'views'));  
   ```  

   - 'Specify the view engine'  
   ```  
   app.set('view engine', 'ejs');  
   ```  

   - 'Render files with an HTML file extention'  
   ```  
   app.engine('html', require('ejs').renderFile);  
   ```  

5. Static Routes 
   - Where the framework is stored.
   ```
   app.use(express.static(path.join(__dirname, 'client')));
   ```

6. Body Parser Middleware  

   - Parse JSON  
   ```  
   app.use(bodyParser.json()); 
   ```  

   - Encoded URL  
   ```  
   app.use(bodyParser.urlencoded({extended: false}));  
   ```  

7. Routes  

   ```  
   app.use('/', index);  
   ```  

		

