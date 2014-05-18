angular.module('smartApp')
        .controller('menuCtrl', function($scope,$location) {
            console.log('in');
            $scope.isMenuItemActive = function(path) {
                //console.log(path);
                var split_path = $location.path().split("/");
                // console.log(split_path);
                // console.log(split_path.indexOf(path));
                // console.log(path);
                return split_path.indexOf(path) > -1;
                //return path === $location.path();
            };
        });



