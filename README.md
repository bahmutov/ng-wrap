# ng-wrap

> Wrap any global variable in Angular service for dependency injection

Install: `bower install ng-wrap --save`
Use:

Provides single module `ng-wrap` with `ngWrap` function `ngWrap(<global name>, leaveGlobal);`

```html
// index.html
// include angular
// include lodash (for this example)
<script src="bower_components/ng-wrap/ng-wrap.js"></script>
<script>
    // removes _ from global namespace, instead allow injecting it as dependency
    angular.module('AppInRun', ['ng-wrap'])
      .run(function (ngWrap) {
        console.log('wrapping _');
        ngWrap('_');
        // no more window._
        // _ can be injected into other methods now
      })
      .controller('AppController', function ($scope, _) {
        console.log('AppController');
        console.log('injected typeof _ is', typeof _);
        console.log('window._ ?', typeof window._);
      });
    // you may also wrap your providers during the config stage of Angular's bootstrapping process
    angular.module('AppInConfig', ['ng-wrap'])
      .config(function (ngWrapProvider) {
        console.log('wrapping _');
        ngWrapProvider.wrap('_');
        // no more window._
        // _ can be injected into other methods now
      })
      .controller('AppController', function ($scope, _) {
        console.log('AppController');
        console.log('injected typeof _ is', typeof _);
        console.log('window._ ?', typeof window._);
      });

</script>
// output
wrapping _
AppController
injected typeof _ is function
window._ ? undefined
```

This was inspired by Ben Nadel's [Creating And Extending A Lodash / Underscore Service In AngularJS][extend lodash].

### Small print

Author: Gleb Bahmutov &copy; 2014

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/d3-panel/issues) on Github

## MIT License

Copyright (c) 2014 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[extend lodash]: http://www.bennadel.com/blog/2720-creating-and-extending-a-lodash-underscore-service-in-angularjs.htm
