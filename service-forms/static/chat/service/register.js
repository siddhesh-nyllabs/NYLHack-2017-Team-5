/**
 * Created by Siddhesh on 2/13/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory('UserService', userService);

    function userService($http) {
        var api = {
            "register": register
        };
        return api;

        function register(user) {
            return $http.post("/api/register", user);
        }
    }
})();