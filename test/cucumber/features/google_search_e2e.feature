Feature: Google Search Functionality

    Scenario: Searching for information using Google Search
        Given the user is on the Google homepage
        When the user enters "What is the tallest mountain in the world?" into the search box
        And the user clicks the Google Search button
        Then the search results page is displayed
        And the top result contains the text "Mount Everest"