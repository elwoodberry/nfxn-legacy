## MongoDB Sandbox API  
[Table Of Contents](../../README.md) / MongoDB Sandbox API

For MongoDB, the service used is 'mLab'
# Working With 'mLab'

01. Click 'Create New' to create a new deployment

02. Choose Cloud Provider
	- Amazon

03. Under 'Plan', click 'Single Node'
	- Choose 'Sandbox'

04. Under 'Database Name'
	- Give the DB a name, 'mytasklist_elwood' (must be unique)

05. Click 'Create new MongoDB deployment'




# Configure the DB: Users

01. Click on the database just created

02. Click on Users
	- Click 'Add Database User'
	- Create a DB Username, 'elwood'
	- Create a DB User Password, 'p@ssw0rd'
	- Click 'Create'





# Configure the DB: Collections

01. Click on 'Collections'
02. Click 'Add Collection'
	- Create a collection name, 'tasks'

03. Click on the 'tasks' collection
04. Click 'Add Document'
05. Add a JSON formatted task

```
	{
		"title": "Walk The Dog",
		"isDone": false
	}
```

06. Click "Create And Go Back"

07. Create 2 more task documents

```
	{
		"title": "Go Grocery Shopping",
		"isDone": false
	}
```

```
	{
		"title": "Go Out To Dinner",
		"isDone": false
	}
```





# Update out 'Tasks' route file