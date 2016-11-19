# Cloning The Repository 
[Table Of Contents](../../README.md) / Cloning The Repository  

1. Clone the Repository 
	```  
	$ git clone https://github.com/####/####.git
	```  

2. Change Directory to the '####' directory
	```
	$ cd ####
	```  

3. Change directory to the 'project' directory  
	```  
	$ cd project/  
	```  

4. Install Bower Package(s)  
	```  
	bower install bootstrap
	```  

5. Install Dependencies
	```  
	$ npm install
	```  

6. Change directory to the 'client' directory
	```  
	$ cd client/  
	```  

7. Install Angular dependencies  
	```  
	$ npm install  
	```  

8. Change directory to the 'app' directory
	```  
	$ cd app/
	```  

9. Install the modules needed for Auth0 in the root 'client' directory.  
	```  
	$ npm install angular2-jwt auth0-lock --save--dev 
	```  

10. Compile TypeScript files (**TO DO:** Update to compile typescript ONLY instead of running everything else)
	```
	$ npm start
	```  
11. Start Server  
	```
	$ nodejs server
	```

	