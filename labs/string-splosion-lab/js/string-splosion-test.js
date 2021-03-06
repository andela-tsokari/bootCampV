describe(" String splosion", function(){

    it("should manipulate the string", function(){
        var stringSplosion = new StringSplosion("Code");
        expect(stringSplosion.manipulate()).toEqual("CCoCodCode");
    });
    it("should manipulate a second time", function(){
        var stringSplosion = new StringSplosion("abc");
        expect( stringSplosion.manipulate()).toEqual("aababc");
    });
    it("should manipulate a third time", function(){
        var stringSplosion = new StringSplosion("andela");
        expect( stringSplosion.manipulate()).toEqual("aanandandeandelandela");
    });
});