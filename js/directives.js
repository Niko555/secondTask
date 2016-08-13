app.directive('viewTable', function () {
    return {
        link: function (scope, element, attributes) {
            scope.data = scope[attributes["viewTable"]];
        },

        restrict: "A",

        template: "<thead>" +
        "<tr>" +
        "<th class='text-center'>Item name</th>" +
        "<th class='text-center'></th>" +
        "<th class='text-center'></th>" +
        "</tr>" +
        "</thead>" +
        "<tbody>" +
        "<tr ng-repeat='item in data'>" +
        "<td class='text-center'><span>{{item.value}}</span></td>" +
        "<td class='text-center' ng-click='EditItem(item.id, item.value)'><span class='edit'>Edit</span></td>" +
        "<td class='text-center' ng-click='RemoveItem(item.id)'><span class='edit'>Remove</span></td>" +
        "</tr>" +
        "</tbody>"
    }
});

app.directive('viewForm', function () {
    return {
        restrict: "EA",

        template: "<b><tt>Item value: </tt></b>" +
        "<input type='text' ng-model='value' placeholder='Enter some text'/>" +
        "<br>" +
        "<input type='button' ng-click='EditHandler()' class='btn btn-success' value='Save'/>" +
        "<span class='edit' ng-click='GoBack()'><b>&#60;&#60; Go back</b></span>"

    }
});