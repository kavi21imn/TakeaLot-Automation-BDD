

# Frontend Automation Framework



This project intended to Automate Testing of given website. 
This is Java based Selenium project. It follows Page Object modal design pattern with BDD framework

## What i need to run project in my system?

* Install eclipse 
* Install maven
* JDK 1.8
* Install plugin for testNG (https://www.guru99.com/install-testng-in-eclipse.html)

## How do I set up Framework in my system? 

### Running Test in local system 
 * Download the zip or clone the Git repository.
 * Unzip the zip file (if you downloaded one).
 * Open Eclipse
 	* File -> Import -> Existing Maven Project -> Navigate to the folder where you unzipped the zip file
	* Select the right project
 * Right Click on testng.xml and Run as TestNG Suite

### Running in Jenkins Pipeline
 * We Need create bat file and to run using testng.xml 
 * Follow below two link to create pipeline.
     * http://www.seleniumeasy.com/testng-tutorials/how-to-run-testng-xml-via-batch-file-example
     * https://www.seleniumeasy.com/jenkins-tutorials/invoke-testng-xml-tests-from-jenkins

### Running using maven command
 * we can use below maven command to run test either via command prompt or pipeline.
      * ```mvn clean test -Dcucumber.options="--tags @debug1```
   
## How do I know if Test is passed? 
 * Option 1 : In Console Failures should be zero
 * Option 2 : Navigate to AutomationReport folder and check most recent HTML report.
 
## How do I change login credentials? 
 * we need to change login credential in Configuration.properties (path : \src\main\java\com\frontendAutomation\Config\Configuration.properties)
 
 The main challengees: 1,Finding valid xpath for the products 2, Second product Yellow wrist band display is keep changing first row and Last row. 3, And the Yellow wrist band has .., near the link text so the element not found exception happening for the right element.4, I solved that issue by adjusting Substring (//if (productList.get(i).getText().startsWith(productName.substring(0, 40))
Kavitha
