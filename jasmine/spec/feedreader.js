/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */


/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

    /* a new test suite named "RSS Feeds" */
    describe('RSS Feeds', () => {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds).not.toBe('');
            expect(allFeeds).not.toBe(null);
            expect(allFeeds.length).not.toBe(0);
        });
        /* a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('should URL defined and not empty', () => {
            for (feedUrl of allFeeds) {
                expect(feedUrl.url).toBeDefined();
                expect(feedUrl.url).not.toBe('');
                expect(feedUrl.url).not.toBe(null);
                expect(feedUrl.url.length).not.toBe(0);
            }
        });
        /* a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('should name defined and not empty', () => {
            for (feedName of allFeeds) {
                expect(feedName.name).toBeDefined();
                expect(feedName.name).not.toBe('');
                expect(feedName.name).not.toBe(null);
                expect(feedName.name.length).not.toBe(0);
            }
        });
    });


    /* a new test suite named "The menu" */
    describe('The menu', () => {
        const body = $('body');
        /* a test that ensures the menu element is
         * hidden by default.
         */
        it('should hidden by default', () => {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        /* a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
        */
        it('should display when clicked and does it hide when clicked again', function () {
            const menuIcon = $('.menu-icon-link');
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });


    /* a new test suite named "Initial Entries" */
    describe("Initial Entries", () => {
        beforeEach((done) => {
            setTimeout(() => {
                loadFeed(0, done);
            }, 100);
        });
        /* a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        it('should there is at least a single entry element within the feed container', function () {
            const entry = $('.feed a').children('.entry');
            expect(entry.length).toBeGreaterThan(0);
        });
    });


    /* a new test suite named "New Feed Selection" */
    describe('New Feed Selection', () => {
        let preFeed;
        /* a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        beforeEach((done) => {
            loadFeed(0, function () {
                preFeed = $('.feed');
                loadFeed(1, done);
            });
        });


        it('should content actually changes', function (done) {
            const newFeed = $('.feed');
            expect(newFeed).not.toBe(preFeed);
            done();
        });
    });
}());
