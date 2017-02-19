var pizzaTopping = angular.module("Pizzatopping", []);

pizzaTopping.controller('PizzaController', 'PizzaService', ['$scope', function($scope, PizzaService){
    var pt = this;
    
    pt.name = "";
    
    pt.topping1 = [];
    pt.topping2 = [];
    pt.topping3 = [];
    
    $scope.topping1 = {
        top01 : {
            topping: "Pepperoni"
        },
        top02 : {
            topping: "Candian Baconi"
        },
        top03 : {
            topping: "Plain"
        },
        top04 : {
            topping: "Sausage"
        },
        top05 : {
            topping: "Veggie"
        }
    };
    
    pt.selectedtopping1 = pt.topping1[0];
    
    $scope.topping2 = {
        top01 : {
            topping: "Pepperoni"
        },
        top02 : {
            topping: "Candian Baconi"
        },
        top03 : {
            topping: "Plain"
        },
        top04 : {
            topping: "Sausage"
        },
        top05 : {
            topping: "Veggie"
        }
    };
    
    pt.selectedtopping2 = pt.topping2[0];
    
    $scope.topping3 = {
        top01 : {
            topping: "Pepperoni"
        },
        top02 : {
            topping: "Candian Baconi"
        },
        top03 : {
            topping: "Plain"
        },
        top04 : {
            topping: "Sausage"
        },
        top05 : {
            topping: "Veggie"
        }
    };
    
    pt.selectedtopping3 = pt.topping3[0];
    
    pt.pizzas = [];
    
    pt.emphasis = function (status, $event){
		
		var el = $event.target.id;
		
		if(status){
			console.log("enter: " + el);
			pt.background = "emphasis";
			console.log(pt.background);
		} else {
			console.log("exit: " + el);		
			pt.background = "deemphasis";
			console.log(pt.background);
		}
	};
	
	pt.remove = function($index){

		pt.pizzas = pt.latestData();
		pt.pizzas.splice($index, 1);
		return PizzaService.setData('my-pizza', angular.toJson(pt.pizzas));		
		
	};
    
    pt.latestData = function() {
        return PizzaService.getData('my-pizza');
    };
	
    pt.update = function(pname, ptopping1, ptopping2, ptopping3) {
		pt.pizzas = pt.latestData();
		if(pt.pizzas == null){
			pt.pizzas = [];
		}
		var pizza = { name: pname, topping1: ptopping1, topping2: ptopping2, topping3: ptopping3};
		console.log(angular.toJson(pizza));
		pt.pizzas.push(pizza);
        return PizzaService.setData('my-pizza', angular.toJson(pt.pizzas));
    };

    //Check to see if null
	if(pt.pizzas != null){
		pt.pizzas = pt.latestData();
	}else{
		console.log("crikey");
	}
   
}]);



pizzaTopping.factory("PizzaService", function($window, $rootScope){
    
    angular.element($window).on('pizza', function(event) {
        if (event.key === 'my-pizza') {
            $rootScope.$apply();
        }
    }); 
    
    return {
        setData: function(key, val) {
			
            $window.localStorage && $window.localStorage.setItem(key, val);
            return this;
        },
        getData: function(key) {
            
            var val = $window.localStorage && $window.localStorage.getItem(key);
            
            var data = angular.fromJson(val);
            
            return data; 
        }
    };
    
});