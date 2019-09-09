module.exports = {
  url: 'https://www.google.com/advanced_search',
  elements: {
    mainQuerySelector: 'input[name="as_q"]',
    languageButtonDropdown: '#lr_button',
    lastUpdatedButtonDropdown: '#as_qdr_button',
    submitButton: '.jfk-button[type="submit"]',
  },
  commands: [
    {
      setQuery(value) {
        return this.setValue('@mainQuerySelector', value);
      },
      selectFilter(selector, value) {
        return this.click(selector).click(`.goog-menuitem[value=${value}]`);
      },
      search() {
        return this.click('@submitButton');
      },
    },
  ],
};
