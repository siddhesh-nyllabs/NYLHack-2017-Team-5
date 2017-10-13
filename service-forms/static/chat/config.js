/**
 * Created by Siddhesh on 2/13/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .config(configuration)
        .run(setPageTitle);

    function configuration($routeProvider, $httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        $httpProvider.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';

        $routeProvider
            .when("/index", {
                templateUrl: 'views/index.html',
                controller: 'MainController',
                title: 'Index'
            })
            .when("/lang/:lang", {
                templateUrl: 'views/register.html',
                controller: 'RegisterController',
                title: 'Register'
            })
            .when("/register", {
                templateUrl: 'views/register.html',
                controller: 'RegisterController',
                title: 'Register'
            })
            .when("/chat", {
                templateUrl: 'views/chat.html',
                controller: 'ChatController',
                title: 'Chat'
            })
            .when("/", {
                redirectTo: "/index"
            })
            .otherwise({
                redirectTo: "/"
            });

    }

    function setPageTitle($rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current) {
            $rootScope.title = current.$$route.title;
        });
    }

})();