describe('IndexController', function() {
    beforeEach(module('app'));

    var $controller;

    beforeEach(function() {
        inject(function(_$controller_){
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $controller = _$controller_;
        });
    });

    describe('$scope.items', function() {
        it('sets scope.items on start', function() {
            var $scope = {};
            var controller = $controller('IndexController', { $scope: $scope });
            expect($scope.items).toEqual([{ name: "michael scott" }, { name: "holly flax" }, { name: "jim halpert" }, { name: "dwight schrute"}, { name: "stanley hudson" }]);
        });
    });

    describe('$scope.addNewName', function() {
        it('adds new item to items', function() {
            var $scope = {};
            var controller = $controller('IndexController', { $scope: $scope });
            $scope.newName = "BLAH";
            $scope.addNewName();
            expect($scope.items).toEqual([{ name: "michael scott" }, { name: "holly flax" }, { name: "jim halpert" }, { name: "dwight schrute"}, { name: "stanley hudson" }, { name: "BLAH" }]);
        });
        it('clears new name', function() {
            var $scope = {};
            var controller = $controller('IndexController', { $scope: $scope });
            $scope.newName = "BLAH";
            $scope.addNewName();
            expect($scope.newName).toEqual("");
        });
    });
});
