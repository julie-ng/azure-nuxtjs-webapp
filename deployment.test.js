const { Builder, By, Key, until } = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')

const testUrl = process.env.SELENIUM_TARGET_URL || 'http://localhost:3000'
const buildNo = process.env.APP_BUILD_SHA || '(none)'

describe(`Deployment to ${testUrl}`, () => {
	let driver

	beforeAll(async () => {
		driver = await new Builder()
			.forBrowser('chrome')
			.setChromeOptions(new chrome.Options().headless())
			.build()
	})

	// Flakey - not clean, but build agents
	// are chucked when finished anyway 🤷‍♀️
	// afterAll(async () => {
	// 	await driver.close()
	// 	await driver.quit()
	// }, 15000)

	test('has "Hello Azure" page title', async () => {
		await driver.get(testUrl)
		const title = await driver.findElement(By.css('#js-title')).getText()
		expect(title).toEqual('Hello Azure from Nuxt.js')
	})

	test('has correct Build #', async () => {
		await driver.get(testUrl)
		const title = await driver.findElement(By.css('#js-build-no')).getText()
		expect(title).toEqual(`Commit ${buildNo}`)
	})
})
