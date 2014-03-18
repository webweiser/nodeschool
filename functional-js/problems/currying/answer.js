// Generated by CoffeeScript 1.6.3
(function() {
  var curry;

  curry = function(f, n, args) {
    if (args == null) {
      args = [];
    }
    if (n == null) {
      n = f.length;
    }
    if (n === 0) {
      return f.apply(null, args);
    }
    return function(x) {
      return curry(f, n - 1, args.concat(x));
    };
  };

  module.exports = curry;

}).call(this);
