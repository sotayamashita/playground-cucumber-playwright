module.exports = {
  default: [
    "test/cucumber/features/**/*.feature",
    "--require-module ts-node/register", //typescript cucumber
    "--require ./test/cucumber/features/stepDefinitions/**/*.ts",
    "--format progress-bar",
    "--format html:cucumber-report/index.html",
    `--format-options '{"snippetInterface": "synchronous"}'`,
  ].join(" "),
};
