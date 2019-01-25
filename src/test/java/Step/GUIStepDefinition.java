package Step;

import java.io.IOException;
import java.net.URI;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.CommandExecutor;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.gargoylesoftware.htmlunit.javascript.host.URL;

import Util.Lib;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GUIStepDefinition extends Lib{

	public WebDriver driver=null;

	@Before
	public void initialize() {
		System.out.println("We are starting testing!!!");
//		System.setProperty("Webdriver.chrome.driver",
//				"C:\\Users\\syful\\eclipse-workspace\\BDDframework\\chromedriver.exe");
//		// Webdriver is a interface
//		driver = new ChromeDriver();
//
//		driver.manage().window().maximize();
//		driver.get("https://www.facebook.com");
//
//		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
//		DesiredCapabilities dc=new DesiredCapabilities();
//		dc.setBrowserName("Chrome");
//		dc.setPlatform(Platform.WINDOWS);
//		driver=new RemoteWebDriver(new URL("http://localhost:5544/wd/hub"),dc);
	}

	@Given("^user at facebook homepage$")
	public void firststep() {
		System.out.println(driver.getTitle());
		System.out.println("First Step!!!!!!!!!!!!");
	}

	@When("^user enter username \"([^\"]*)\"$")
	public void secondstep(String username) throws IOException {
		driver.findElement(By.xpath(readproperties(driver, "usernamebox"))).sendKeys(username);
	}

	@And("^user enters password \"([^\"]*)\"$")
	public void thirdstep(String password) throws IOException {
		driver.findElement(By.xpath(readproperties(driver, "Passwordbox"))).sendKeys(password);

	}

	@And("^user clicks on login button$")
	public void fourthstep() throws IOException, InterruptedException {
		driver.findElement(By.xpath(readproperties(driver, "LogInButton"))).click();
		Thread.sleep(2000);
	}

	@Then("^user will see a error message \"([^\"]*)\" \"([^\"]*)\"$")
 public void errormessage(String expectederror, String key) throws IOException {
		String actualerror=driver.findElement(By.xpath(readproperties(driver, "actualerrormessage"))).getText();

		takescreenshot(driver, "09-25-2018");
			 if(actualerror.equalsIgnoreCase(expectederror)) {
				 System.out.println("Test passed");
		}else {
		System.out.println("Test failed");
	}
 
 }


	@After
	public void teardown() {
		System.out.println("'We are DONE!!!");
		driver.manage().deleteAllCookies();
		driver.close();
	}

}
