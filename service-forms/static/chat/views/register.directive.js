(function () {
    angular
        .module('WebAppMaker')
        .directive('audioPlayer', playAudio);

    function playAudio() {
        function linkFunc(scope, element, attributes) {
            $(element).click(function() {
                $(element).find("audio").get(0).play();
            });
        }
        return {
            link: linkFunc
        };
    }
})();