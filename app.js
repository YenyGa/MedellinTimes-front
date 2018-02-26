var app = angular.module("MedellinTimesFront", []);
app.controller("MainController", ['$scope','$http',function($scope, $http){
	$scope.demo = "something"
	
	var getPublicaciones = function () {
            $http.get('http://localhost:8090/api/v1/publicaciones')
            .success(satisfactorio)
            .error(error);
        };

	function satisfactorio(data, status, headers, config) {
      console.log("*******  Satisfactorio Transaccion  ********");
      console.log("Transaccion response:: ")
      console.log(data);
      if (data != undefined && null != data) {
        $scope.publicaciones = data;
      }

    }

    function error(data, status, header, config) {
      console.log("*******  Error Transaccion  ********");
	  //Json de ejemplo en caso de que la petición falle
      var fakeResponse = [
		  {
			"id": "12345",
			"encabezado": "Por primera vez, Los Simpsons presentarán al padre de Moe",
			"descripcion": "El actor Ray Liotta será quien le dé la voz a Morty Szyslak. El personaje aparecerá durante un episodio que emitirá la cadena Fox que se centrará en la historia de la vida de Moe.",
			"fecha": 1519312856000,
			"lugar": "EEUU",
			"idCategoria": "1",
			"urlImagen": "images/1.jpg"
		  },
		  {
			"id": "6789",
			"encabezado": "James Rodríguez, posible canje entre el Real y el Bayern",
			"descripcion": "El Bayern le propondría al onceno español un canje con Robert Lewandowski, obteniendo así los derechos deportivos del colombiano.Actualmente, James es propiedad del Real Madrid y se encuentra en préstamo en el Bayern.",
			"fecha": 1519312856000,
			"lugar": "Alemania",
			"idCategoria": "1",
			"urlImagen": "images/2.jpg"
		  }
		]
      satisfactorio(fakeResponse);
    }
	
	getPublicaciones();
	
	
	
		var getPublicidad = function () {
            $http.get('http://localhost:8090/api/v1/publicidad')
            .success(satisfactorioPublicidad)
            .error(errorPublicidad);
        };

	function satisfactorioPublicidad(data, status, headers, config) {
      console.log("*******  Satisfactorio Transaccion  ********");
      console.log("Transaccion response:: ")
      console.log(data);
      if (data != undefined && null != data) {
        $scope.publicidad = data;
      }

    }

    function errorPublicidad(data, status, header, config) {
      console.log("*******  Error Transaccion  ********");
	  //Json de ejemplo en caso de que la petición falle
      var fakeResponse = [
			  {
				"id": "123",
				"link": "http://www.coca-cola.co.uk/stories/keep-on-trucking",
				"empresa": "Coca cola",
				"urlImagen": "images/cocacola.jpg"
			  },
			  {
				"id": "1234",
				"link": "http://www.colgate.com.co/app/Palmolive/Equity/CO/Home.cvsp?utm_source=google&utm_medium=cpc&utm_campaign=palmolive&utm_content=pc-am_palmolive-ADW_CO_ES_PALM_Equity_HC_PALMOLIVE%20CORPORATE_PC_TXT_A_AM_Palmolive%20Corporate_N/A_1/10&gclid=CjwKCAiAt8TUBRAKEiwAOI9pAC_1hueRN0pUWASE33pPXVW7yODU3xC1bxBJjqiqyQ3w-lH-yDC2lxoCpLEQAvD_BwE",
				"empresa": "Palmolive",
				"urlImagen": "images/palmolive.jpg"
			  }
			]
      satisfactorioPublicidad(fakeResponse);
    }
	
	getPublicidad();
}])