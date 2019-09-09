module.exports = {
  'test on browser': function(browser) {
    browser
      .url('https://www.w3.org/TR/webdriver/')
      .waitForElementVisible('.p-name')
      .assert.containsText('.p-name', 'WebDriver');
  },
};
