angular.module('ng-wrap', [])
  .provider('ngWrap', ['$provide', function ($provide) {
    function wrapper(name, leaveGlobal) {
      $provide.provider(name, function () {
        if (typeof window[name] === 'undefined') {
          throw new Error('Cannot find window.' + name);
        }

        var thing = window[name];
        if (!leaveGlobal) {
          delete window[name];
        }

        return {
          $get: function () {
            return thing;
          }
        };
      });
    }
    
    return {
      wrap: wrapper,

      $get: function () {
        return wrapper;
      }
    }
  }]);
