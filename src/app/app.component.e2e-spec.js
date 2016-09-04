describe('App', () => {

    beforeEach(() => {
        browser.get('/');
    });

    it('should have a title', () => {
        expect(browser.getTitle()).toEqual("ZoomCouriers");
    });

    it('should have header', () => {
        expect(element(by.css('my-app my-header')).isPresent()).toEqual(true);
    });

    it('should have main', () => {
        expect(element(by.css('my-app main')).isPresent()).toEqual(true);
    });

    it('should have footer', () => {
        expect(element(by.css('my-app my-footer')).isPresent()).toEqual(true);
    });

});
