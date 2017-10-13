/**
 * Created by Siddhesh on 2/14/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("MainController", mainController);

    function mainController(UserService, $location) {
        var vm = this;
        vm.register = register;
        vm.language = "eng";

        function register(language) {
            vm.language = language;

            console.log(vm.language);
            if (language) {
                $location.url("/lang/" + vm.language);
            } else {
                vm.error = 'Please enter all the details';
            }
        }
    }
})();