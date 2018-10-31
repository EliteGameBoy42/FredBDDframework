package Runner;



import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resource/Feature/FBlogin.Feature", glue = {
		"Step" }, format = { "pretty", "html:target/cucumber" }, tags="@smoke")

public class DefaultRunner extends AbstractTestNGCucumberTests {

}
