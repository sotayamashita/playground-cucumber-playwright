# Cucumber + Playwright

## Setup

```bash
git clone git@github.com:sotayamashita/playground-cucumber-playwright.git
cd playground-cucumber-playwright

pnpm install
```

## Running tests

### Runing tests by cucumber

It will generate an HTML report under `cucumber-report/` after executing the command below:

```bash
pnpm run test:cucumber
```

### Running tests by playwright

It will generate an HTML report under `playwright-report/` after executing the command below:

```bash
pnpm run test:playwright
```

## Acknowledgement

- [Tallyb/cucumber-playwright](https://github.com/Tallyb/cucumber-playwright)
- [serenity-js/serenity-js-cucumber-playwright-template](https://github.com/serenity-js/serenity-js-cucumber-playwright-template)
