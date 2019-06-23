/*This file conatains different testsuits and testcases for feed reader*/

/*The following function is preceeded with $ symbol to ensure that DOM is ready*/
$(function() {
  // This is the first test suite that contains testcases for Feeds
  describe('RSS Feeds', function() {
    // This is the testcase to check if all the feeds are defined
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    // This is the testcase to check if all the URLs are defined and non empty
    it('all URLs are defined', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined()
        expect(feed.url.length).not.toBe(0)
      })
    })

    // This is the testcase to check if all the names are defined and non empty
    it('all names are defined', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.name).toBeDefined()
        expect(feed.name.length).not.toBe(0)
      })
    })
  });


  // This is the first test suite that contains testcases for menu items

  describe('The menu', function() {
    //Testcase to check if the menu item is hidden when  the app is opened
    it('is menu hidden', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
    /*Testcase that checks if the menu bar is opened when the link is clicked once and closed
    during the second click*/
    it('open close check', function() {
      $(".menu-icon-link").click()
      expect($('body').hasClass('menu-hidden')).toBeFalsy();
      $(".menu-icon-link").click()
      expect($('body').hasClass('menu-hidden')).toBeTruthy();
    })
  });

  // Testsuite that checks The initial entries
  describe('Initial Entries', function() {
    // Providing asynchronization using done function
    beforeEach(function(done) {
      loadFeed(0, done);
    })
    //Testcase to check the non emptyness of entry element in the feed container
    it('load feed check', function() {
      expect($(".feed.entry").length).not.toBe('')
    })
  })

  // Testsuite that contains test cases to check the befaviour of the app when a new feed is selected
  describe("New Feed Selection", function() {
    //Storing two different feedContents
    let feedOne, feedTwo
    let feedContent = $(".feed")
    beforeEach(function(done) {
      loadFeed(0, function() {
        feedOne = feedContent.text()
        loadFeed(1, function() {
          feedTwo = feedContent.text()
          done()
        })
      })
    })
    //Checking if the two feedContents are not equal,i.e a new feed is loaded
    it('change content', function(done) {
      expect(feedTwo).not.toBe(feedOne)
      done()
    })
  })
}());
