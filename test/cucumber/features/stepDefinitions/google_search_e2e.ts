import { chromium, Page, expect, Browser, BrowserContext } from "@playwright/test"
import { before, after, binding, given, then, when } from "cucumber-tsflow";

@binding()
class Steps {
    private browser: Browser;
    private context: BrowserContext
    private page: Page;


    constructor() {
        this.browser;
        this.context;
        this.page;
    }

    @before()
    public async beforeEachScenario() {
        this.browser = await chromium.launch();
        this.context = await this.browser.newContext({ locale: 'en-GB' });
        this.page = await this.context.newPage();
    }

    @after()
    public async afterEachScenario() {
        await this.browser.close();
    }

    @given('the user is on the Google homepage')
    public async givenTheUserIsOnTheGoogleHomepage() {
        await this.page.goto('https://www.google.com');
    }

    @when('the user enters {string} into the search box')
    public async whenTheUserEntersIntoTheSearchBox(string: string) {
        await this.page.fill('textarea[name="q"]', string);
    }

    @when('the user clicks the Google Search button')
    public async whenTheUserClicksTheGoogleSearchButton() {
        await this.page.getByLabel('Google Search').first().click();
    }

    @then('the search results page is displayed')
    public async thenTheSearchResultsPageIsDisplayed() {
        expect(this.page.url()).toContain('search');
    }

    @then('the top result contains the text {string}')
    public async thenTheTopResultContainsTheText(string: string) {
        const text = await this.page.getByRole('heading', { name: 'Mount Everest', exact: true }).locator('span').textContent()
        expect(text).toContain(string);
    }
}

export = Steps;
