# cidm4385-pizza-topping

This app is made to take in a users input on what toppings a user wants and 
saving this information to a database.

## Features

* Allow user to input a Pizza name
* Allow user to select the from a list of toppings three times
* Save all of this information to a database

## Code Example

The 'Code' is not complete. I had difficulty mergining my demo code with my drop
down menus. It broke my code as a whole.

Some demo code:
```
<body ng-controller="MainController as mc">
    <h1>Local Storage Demo</h1>
    <h3>List of Presidents of the United States</h3>
    <ul ng-if="mc.presidents != null">
      <li ng-repeat="president in mc.presidents" 
		  ng-mouseenter="mc.emphasis(true, $event)" 
		  ng-mouseleave="mc.emphasis(false, $event)"
		  ng-class="mc.background"
		  id="president{{$index}}">
		  
		<!-- NOTE: the property names are not the same as the bound variables -->
        {{president.name}} ({{president.year}})
		[<label for="remove">Remove</label>
		<input name=remove" type="checkbox"  ng-click="mc.remove($index)">]
		<div ng-show="mc.showEdits"></div>
		<!--Put editing tools here-->
      </li>
    </ul>
    <label for="presidentName">President Name</label>
    <select ng-model="selectedTopping1"
                    ng-options="y.topping for (x, y) in topping1"
                    ></select>
    <br />
    <br />
    <label for="presidentYear">President Year</label> 
    <input name="presidentYear" type="text" ng-model="mc.presidentYear" />
    <br />
    <br />
    <input type="button" value="update" ng-click="mc.update(mc.presidentName, mc.presidentYear)" /> 
```

My code:
```
    <select ng-model="selectedtopping1"
                    ng-options="y.topping for (x, y) in topping1"
                    ng-change=""></select>
```
```
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
```