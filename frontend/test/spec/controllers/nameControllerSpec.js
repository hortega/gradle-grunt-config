'use strict';

describe('Controller: NameCtrl', function () {

    // load the controller's module

    var scope, NameServiceMock = {};

    beforeEach(function () {
        module('nameApp', function($provide) {
            $provide.value('NameService', NameServiceMock);
        });
        
        inject(function($q){
            NameServiceMock.getName = function() {
                var defer = $q.defer();
                defer.resolve({"name":"currentName"});
                return defer.promise;
            };
            NameServiceMock.setName = jasmine.createSpy('setName').and.callFake(function(){
                var defer = $q.defer();
                defer.resolve();
                return defer.promise;
            })
        });
    });

    beforeEach(inject(function ($controller, $rootScope, NameService) {
        scope = $rootScope.$new();

        $controller('NameCtrl', {
            $scope: scope,
            NameService: NameService
        });
        
        scope.currentName = "";
        scope.newName = "newName"

        scope.$digest();
    }));

    describe("GetName", function () {
        it("gets name from service", function () {
            // when
            scope.getName();
            // then
            expect(scope.currentName).toEqual("currentName");
        });
    });
//    
    describe("SetName", function () {
        it("Sets new name and updates scope.currentName by calling NameService.getName", function () {
            // when
            scope.setName();
            // then
            expect(scope.currentName).toEqual("currentName");
            expect(NameServiceMock.setName).toHaveBeenCalled();
        });
    });
    


});
