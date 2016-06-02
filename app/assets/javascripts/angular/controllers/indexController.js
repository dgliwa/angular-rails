angular.module("app.controllers").controller("IndexController", ["$scope", function($scope) {
    $scope.newName = "";
    $scope.test = "Hello World!";
    $scope.items = [{ name: "michael scott" }, { name: "holly flax" }, { name: "jim halpert" }, { name: "dwight schrute"}, { name: "stanley hudson" }];

    $scope.addNewName = function() {
        if($scope.newName && $scope.newName != "") {
            $scope.items.push({ name: $scope.newName });
        }
        $scope.newName = "";
    }
}]);
