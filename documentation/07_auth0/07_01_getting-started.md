
# Auth0
[Table Of Contents](../../README.md) / Auth0  

Pronounced "auth zero".  
Access control and authentication  

1. Create an account with [Auth0](https://auth0.com/)  

2. Click on 'Clients' in the main menu on the left. Click 'Create Client'  

3. Give it a name and choose 'Single Page Web Application'  

4. Click 'Create'  

5. Under Settings set the 'Allowed Callback URLs'  
   - Set the url to 'http://localhost:3000'  

6. Click 'Save'  
   - If you now click on 'Clients' in the sidebar menu, you should see your new client  







### Install Modules  
Install the modules needed for Auth0 in the root 'client' directory.  

1. Angular 2 JWT  
   [Helper library for handling JSON Web Tokens(JWT) in Angular 2](https://www.npmjs.com/package/angular2-jwt)  
   ```  
   $ npm install angular2-jwt --save--dev  
   ```  

2. Auth0 Lock Widget   
   The default authentication widget provided by Auth0.  
   [Auth0 Lock Widget](https://www.npmjs.com/package/angular2-jwt)  

   ```  
   $ npm install auth0-lock --save--dev  
   ```  





### Map Angular JWT Library  
In the 'systemjs.config.js' file make the following changes:  

1. Other Libraries  
   ```  
   'angular2-jwt': 'node_modules/angular2-jwt/angular2-jwt.js'
   ```  

2. Packages  
   ```  
   'angular2-jwt': {  
      "defaultExtension": 'js'  
   }  
   ```  
3. Index.html  
   ```  
   <head>  

   ...  

	   <script src="https://cdn.auth0.com/js/lock/10.5/lock.min.js"></script>  

   ...  

   </head>  
   ```  







