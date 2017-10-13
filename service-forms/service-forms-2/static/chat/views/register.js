/**
 * Created by Siddhesh on 2/14/2017.
 */
(function () {
  angular
    .module("WebAppMaker")
    .controller("RegisterController", registerController);

  function registerController(UserService, $location, $routeParams, $sce) {
    let vm = this;
    vm.language = $routeParams['lang'];

    vm.register = register;
    vm.getAudioURL = getAudioURL;
    vm.getLabel = getLabel;
    vm.getToolTip = getToolTip;
    vm.buttonText = buttonText;

    let labels = {
      "eng": {
        "firstName": "First Name",
        "lastName": "Last Name",
        "rel": "Relationship to PolicyOwner",
        "companyName": "Company Name",
        "ssn": "Social Security Number"
      },
      "esp": {
        "firstName": "Nombre de pila",
        "lastName": "Apellido",
        "rel": "Relación con el responsable de la política",
        "companyName": "nombre de empresa",
        "ssn": "Número de seguridad social"
      },
      "fre": {
        "firstName": "First Name",
        "lastName": "Last Name",
        "rel": "Relationship to PolicyOwner",
        "companyName": "Company Name",
        "ssn": "Social Security Number"
      },
      "ger": {
        "firstName": "First Name",
        "lastName": "Last Name",
        "rel": "Relationship to PolicyOwner",
        "companyName": "Company Name",
        "ssn": "Social Security Number"
      },
      "jpn": {
        "firstName": "First Name",
        "lastName": "Last Name",
        "rel": "Relationship to PolicyOwner",
        "companyName": "Company Name",
        "ssn": "Social Security Number"
      },
    };

    let tooltips = {
      "eng": {
        "firstName": "Enter your first name as it appears on your policy",
        "lastName": "Enter your last name as it appears on your policy",
        "rel": "Mention your relationship to the policy owner",
        "companyName": "Enter the company you work for",
        "ssn": "Enter your 10-digit Social Security Number"
      },
      "esp": {
        "firstName": "Introduzca su nombre tal y como aparece en su póliza",
        "lastName": "Ingrese su apellido tal como aparece en su póliza",
        "rel": "Mencione su relación con el propietario de la póliza",
        "companyName": "Introduzca la empresa para la que trabaja",
        "ssn": "Ingrese su Número de Seguro Social de 10 dígitos"
      },
      "fre": {
        "firstName": "Enter your first name as it appears on your policy",
        "lastName": "Enter your last name as it appears on your policy",
        "rel": "Mention your relationship to the policyOwner",
        "companyName": "Enter the company you work for",
        "ssn": "Enter your 10-digit Social Security Number"
      },
      "ger": {
        "firstName": "Enter your first name as it appears on your policy",
        "lastName": "Enter your last name as it appears on your policy",
        "rel": "Mention your relationship to the policyOwner",
        "companyName": "Enter the company you work for",
        "ssn": "Enter your 10-digit Social Security Number"
      },
      "jpn": {
        "firstName": "Enter your first name as it appears on your policy",
        "lastName": "Enter your last name as it appears on your policy",
        "rel": "Mention your relationship to the policyOwner",
        "companyName": "Enter the company you work for",
        "ssn": "Enter your 10-digit Social Security Number"
      },
    };

    let audioURL = "https://s3.amazonaws.com/audioposts-nyl/";

    function getTrustedHtml(html) {
      return $sce.trustAsHtml(html);
    }

    function getAudioURL(prefix) {
      if (vm.language !== "esp") {
        return $sce.trustAsResourceUrl(audioURL + prefix + "_eng.mp3");
      }
      return $sce.trustAsResourceUrl(audioURL + prefix + "_" + vm.language + ".mp3");
    }

    function register(user) {
      if (user) {
        UserService.register(user)
          .then(function (response) {
              var user = response.data;
              $location.url("/user/" + user._id);
            },
            function (error) {
              vm.error = error.data;
            });
      } else {
        vm.error = 'Please enter all the details';
      }
    }

    function buttonText() {
      if(vm.language === "eng") {
        return "Print and Sign your form";
      } else {
        return "Imprimir y firmar el formulario";
      }
    }

    function getLabel(fieldName) {
      return labels[vm.language][fieldName];
    }

    function getToolTip(fieldName) {
      return tooltips[vm.language][fieldName];
    }
  }
})();
