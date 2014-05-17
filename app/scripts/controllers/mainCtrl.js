'use strict';

angular.module('smartApp')
  .controller('MainCtrl', function ($scope) {
    
    $scope.myInterval = 2000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
      var newWidth = 600 + slides.length;
      console.log('http://placekitten.com/' + newWidth + '/300');
      slides.push({
        image: 'http://placekitten.com/' + newWidth + '/300',
        text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
          ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
      });
    };
    for (var i=0; i<4; i++) {
      $scope.addSlide();
  }
    
  });
