"use strict";

describe('Service: NameService', function () {

    var nameService, httpBackend;

    beforeEach(module('nameApp'));
    beforeEach(inject(function (_NameService_, $httpBackend) {
        nameService = _NameService_;
        httpBackend = $httpBackend;
    }));

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    describe('getName', function () {
        it('gets name from server', function () {
            // given
            httpBackend.expectGET('/gradle-automated-tests/name').respond(200, 'currentName');
            // when
            var actualName = nameService.getName();
            httpBackend.flush();
            
            //then
            actualName.then(function(response) {
                expect(response.name).toEqual('currentName');
            });
        });
    });
    
    describe('setName', function () {
        it('puts name to server', function () {
            // given
            httpBackend.expectPUT('/gradle-automated-tests/name?name=newName').respond(200, '');
            // when
            nameService.setName("newName");
            httpBackend.flush();
        });
    });
});