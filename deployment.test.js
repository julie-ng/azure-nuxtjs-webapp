const { Builder, By, Key, until } = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')

const testUrl = process.env.SELENIUM_TARGET_URL || 'http://localhost:3000'

describe(`Deployment to ${testUrl}`, () => {
	let driver

	beforeAll(async () => {
		driver = await new Builder()
			.forBrowser('chrome')
			.build()
	})

	afterAll(async () => {
		await driver.quit()
	}, 15000)

	test('has "Hello Azure" page title', async () => {
		await driver.get(testUrl)
		const title = await driver.findElement(By.tagName('h1')).getText()
		expect(title).toContain('Hello Azure from Nuxt.js')
	})
})
