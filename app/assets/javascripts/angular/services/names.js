angular.module("app.services").factory("names", ["$resource", function($resource) {
    var names = $resource("/api/names", {}, {});

    return { query: names.query };
}]);
