// Generated by CoffeeScript 1.6.3
(function() {
  angular.module('swUtils').filter('reverse', function() {
    return function(items) {
      return items.slice().reverse();
    };
  });

}).call(this);