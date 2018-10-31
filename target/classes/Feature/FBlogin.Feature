Feature: Facebook login

@fblogin @smoke @regression
Scenario Outline: "<Testname>"	
	Given user at facebook homepage
	When user enter username "<username>"
	And user enters password "<password>"
	And user clicks on login button
	Then user will see a error message "<errormsg>" "<actualerrorlocator>"
	
	

	Examples:
	|Testname						  	|username						|password	|errormsg																						|actualerrorlocator|
	|Invalid username & invalid password|syfulislam@ymail				|123456		|The email or phone number you’ve entered doesn’t match any account. Sign up for an account.	|actualerrormessage|	
	|Valid username & valid password  	|harrypotter@gmail.com			|123456789	|The password you’ve entered is incorrect. Forgot Password?										|actualerrormessage|
	|Empty username & valid password  	|								|12345789	|The email or phone number you’ve entered doesn’t match any account. Sign up for an account.	|actualerrormessage|
	
	
	
	
	
	
	
	
	
	

	
	
	
	
	
	
	
	