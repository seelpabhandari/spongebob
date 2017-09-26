
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "app/views/icon.html",
        controller:"mainController"
    });
});
