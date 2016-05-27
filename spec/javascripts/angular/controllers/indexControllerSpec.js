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
            expect($scope.items).toEqual([{ name: "mark" }, { name: "raz" }, { name: "joye" }, { name: "lacey"}, { name: "alejandro" }]);
        });
    });
});
