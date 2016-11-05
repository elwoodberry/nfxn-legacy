# Bower Frontend Package Manager

[Table Of Contents](../../README.md) / Bower Frontend Package Manager  

For this project Bootstrap 3 is used for the UI components. While there are a few ways to set this up, for this project Bower will be used.

### Install Bower Globally  
```  
$ npm install -g bower   
```  

### Set Up Locations
For this project, when bower is used, the location of the packages will be in the 'client' directory inside a folder called 'bower_components'

**Create A New Bower File**
In the project root, create a file called '.bowerrc'.   
```  
{  
	'directory': "client/bower_components"  
}  
```  

**Install Packages**  
From the command line run the bower command to install pacakages. In this case, Bootstrap.
```  
$ bower install bootstrap --save  
```  

**Add references to the HTML**  
Now that our packages have been installed, we now need to reference those files in the 'index.html' file.  

Bootstrap Stylesheet Link  
```  
<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
```
