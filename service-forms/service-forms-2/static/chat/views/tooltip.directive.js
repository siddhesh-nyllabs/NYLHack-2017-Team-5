(function () {
    angular
        .module('WebAppMaker')
        .directive('toolTip', showTip);

    function showTip() {
        function linkFunc(scope, element, attributes) {
          $(element).tooltip();
        }
        return {
            link: linkFunc
        };
    }
})();
