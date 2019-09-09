module.exports = {
  '@tags': ['google'],
  '@disabled': true,
  'Google advanced search Laxmi Prasad Devkota': function(browser) {
    // Eg:1
    const mainQuery = 'Laxmi Prasad Devkota';
    // const mainQuerySelector = 'input[name="as_q"]';
    // const languageButtonDropdown = '#lr_button';
    // const languageButtonValue = '.goog-menuitem[value="lang_hi"]';
    // const lastUpdatedButtonDropdown = '#as_qdr_button';
    // const lastUpdatedButtonValue = '.goog-menuitem[value="w"]';
    // const submitButton = '.jfk-button[type="submit"]';

    const page = browser.page.googleAdvancedSearch();

    const resultsPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;
    const resultsLanguageQuerySelector = '[aria-label="Search Hindi pages"]';

    const resultsTimeQuerySelector = '[aria-label="Past week"]';

    // debugger;
    // Eg:1

    // browser
    //   .url('https://www.google.com/advanced_search')
    // .setValue(mainQuerySelector, mainQuery)
    // .click(languageButtonDropdown)
    // .click(languageButtonValue)
    // .click(lastUpdatedButtonDropdown)
    // .click(lastUpdatedButtonValue)
    // .perform(() => {
    //   debugger;
    // })
    // .click(submitButton)

    //Eg:2

    page
      .navigate()
      .setQuery(mainQuery)
      .selectFilter('@languageButtonDropdown', 'lang_hi')
      .selectFilter('@lastUpdatedButtonDropdown', 'w')
      .search();

    browser.assert
      .urlContains('as_q=Laxmi+Prasad+Devkota', 'Query is Laxmi Prasad Devkota')
      .assert.urlContains('lr=lang_hi', 'Language is Hindi')
      .assert.urlContains('as_qdr=w', 'Time Period is Past week');

    // browser.expect.element(resultsPageQuerySelector).to.be.visible;
    browser.assert.visible(resultsPageQuerySelector, `Query is ${mainQuery}`);
    // browser.assert.containsText(
    //   resultsLanguageQuerySelector,
    //   'Search Hindi pages',
    //   `Language Query is Hindi`,
    // );
    // browser.assert.containsText(
    //   resultsTimeQuerySelector,
    //   'Past week',
    //   `TIme Query is Past week`,
    // );
    browser.saveScreenshot('tests_output/google.png');
  },
};
