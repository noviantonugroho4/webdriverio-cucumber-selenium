Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I open the browser and load the url <homepageurl>
    Then I should see a header message with text <homepageheader>

    Examples:
      | homepageurl | homepageheader |
      | https://the-internet.herokuapp.com/ | Welcome to the-internet |
