This is a solution for the assignment for Wiser QA engineer position. I used Javascript and Playwright to create three tests based on the assignment details:

Page: www.automationexercise.com

1. Validate User Registration Process
2. Search and Add a Product to Cart
3. Test Login and Logout Functionality

The tests can be executed by running them separately through test explorer or all together by running ```npx playwright test``` command in VS Code terminal. 

Before the first test, a global setup from ```globalSetup.js``` should be executed where session with logged in user should be created and stored. This session will be shared among those tests where required. The tests where clean session should be the starting point will ignore the global setup and they will store only the cookie consent cookie. In this way a cookie notification is handled so it doesn't pop up when the tests start. The first time the global setup is executed, it will generate ```LoginAuth.json``` which is added to ```gitignore``` file. If you delete this file locally, you may need to close/open the project again to make the Playwright run it again and generate a new file upon the first test run.  

The credentials for Login test are stored in the environment variables in .env file.

Only basic reporting is set as html reporter.

The structure of the framework is simple. Tests folder contains the actual *tests*, while the page object model supporting files are in *pages* folder
