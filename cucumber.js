let common = [
  "test/cucumber/features/**/*.feature",
  "--require-module ts-node/register", //typescript cucumber
  "--require ./test/cucumber/features/stepDefinitions/**/*.ts",
  "--format progress-bar",
  "--format html:cucumber-report/cucumber-report.html",
  `--format-options '{"snippetInterface": "synchronous"}'`,
].join(" ");

module.exports = {
  default: common,
};
