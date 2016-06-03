describe('IndexController', function() {
    beforeEach(module('app'));

    var $controller;
    var $q;
    var $rootScope;
    var mockNames;
    var queryDeferred;
    var $scope;


    beforeEach(function() {
        mockNames = jasmine.createSpyObj('names', [
            'query'
            ]);

        module(function ($provide) {
            $provide.value('names', mockNames);
        });
    });

    beforeEach(function() {
        inject(function(_$controller_, _$q_, _$rootScope_){
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $q = _$q_;
            $controller = _$controller_;
            $rootScope = _$rootScope_;
            queryDeferred = $q.defer();
            mockNames.query.and.returnValue({ $promise: queryDeferred.promise });
            queryDeferred.resolve([{ name: "michael scott" }, { name: "holly flax" }, { name: "jim halpert" }, { name: "dwight schrute"}, { name: "stanley hudson" }]);
        });
    });

    describe('$scope.items', function() {
        it('sets scope.items on start', function() {
            var $scope = {};
            var controller = $controller('IndexController', { $scope: $scope });
            $rootScope.$digest();
            expect($scope.items).toEqual([{ name: "michael scott" }, { name: "holly flax" }, { name: "jim halpert" }, { name: "dwight schrute"}, { name: "stanley hudson" }]);
        });
    });

    describe('$scope.addNewName', function() {
        it('adds new item to items', function() {
            var $scope = {};
            var controller = $controller('IndexController', { $scope: $scope, names: mockNames });
            $rootScope.$digest();
            $scope.newName = "BLAH";
            $scope.addNewName();
            expect($scope.items).toEqual([{ name: "michael scott" }, { name: "holly flax" }, { name: "jim halpert" }, { name: "dwight schrute"}, { name: "stanley hudson" }, { name: "BLAH" }]);
        });

        it('clears new name', function() {
            var $scope = {};
            var controller = $controller('IndexController', { $scope: $scope, names: mockNames });
            $rootScope.$digest();
            $scope.newName = "BLAH";
            $scope.addNewName();
            expect($scope.newName).toEqual("");
        });
    });
});
