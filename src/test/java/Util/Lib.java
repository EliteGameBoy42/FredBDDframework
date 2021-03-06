package Util;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import org.apache.commons.io.FileUtils;
//import org.apache.poi.ss.usermodel.Cell;
//import org.apache.poi.ss.usermodel.Row;
//import org.apache.poi.ss.usermodel.Sheet;
//import org.apache.poi.ss.usermodel.Workbook;
//import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Lib {
	/*
	 * This is if you provide xpath it will return that webelement
	 */
	public static WebElement findelement(WebDriver driver, String xpath) {

		WebElement a = driver.findElement(By.xpath(xpath));

		return a;
	}

	/*
	 * it will wait any amount of time based on given time parameter
	 */
	public static void sleep(WebDriver driver, int sec) throws InterruptedException {

		Thread.sleep(sec * 1000);
	}

	/*
	 * it will print the title of the page
	 */
	public static String printtl(WebDriver driver) {
		String a = driver.getTitle();

		return a;

	}

	/*
	 * based on key it will return xpath from properties file
	 */
	public static String readproperties(WebDriver driver, String key) throws IOException {

		InputStream fs = new FileInputStream(
				"C:\\Users\\syful\\eclipse-workspace\\BDDframework\\src\\test\\resource\\Prop\\locator.properties");
		Properties pro = new Properties();
		pro.load(fs);

		String value = pro.getProperty(key);

		return value;

	}

	/*
	 * It will take screenshot
	 */

	public static void takescreenshot(WebDriver driver, String a) throws IOException {

		File src = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);

		FileUtils.copyFile(src, new File("src/test/resource/Prop" + a + "error.png"));
	}

}
