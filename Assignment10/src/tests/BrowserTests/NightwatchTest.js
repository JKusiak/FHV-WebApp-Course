module.exports = {
      'Opening initial page': function (browser) {
            browser
            .url('http://localhost:3000')
            .waitForElementVisible('body')
            .assert.title('Testing assignment')
            .waitForElementVisible('#paginationText')
            .assert.visible('#paginationText')
            .assert.containsText('#paginationText', '1 / 5')
            .end();
      },

      'Moving to the next page': function (browser) {
            browser
            .url('http://localhost:3000')
            .waitForElementVisible('#paginationText')
            .assert.visible('#paginationText')
            .click('#next')
            .assert.containsText('#paginationText', '2 / 5')
            .end();
      },

      'Moving to the previous page': function (browser) {
            browser
            .url('http://localhost:3000')
            .waitForElementVisible('#paginationText')
            .assert.visible('#paginationText')
            .click('#next')
            .assert.containsText('#paginationText', '2 / 5')
            .click('#previous')
            .assert.containsText('#paginationText', '1 / 5')
            .end();
      },

      'Previous page proper limit': function (browser) {
            browser
            .url('http://localhost:3000')
            .waitForElementVisible('#paginationText')
            .assert.visible('#paginationText')
            .assert.containsText('#paginationText', '1 / 5')
            .click('#previous')
            .assert.containsText('#paginationText', '1 / 5')
            .end();
      },
};