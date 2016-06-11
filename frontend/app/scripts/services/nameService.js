'use strict';

angular.module('nameApp').factory('NameService', function ($resource) {
    var resource = $resource('/gradle-automated-tests/name', {
        name: '@newName'
    },
            {
                'query': {
                    method: 'GET', 
                    isArray: false,
                    transformResponse: function (data) {
                        return {
                            name: data
                        }; 
                    }
                },
                'update': {
                    method: 'PUT'
                }
            });
    return {
        getName: function () {
            return resource.query().$promise;
        },
        setName: function (newName) {
            return resource.update({newName: newName}).$promise;
        }
    };
});
