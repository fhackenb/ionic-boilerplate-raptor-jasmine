angular.module('starter', ['ionic', 'starter.controllers'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
	  $stateProvider

	  .state('app', {
	    url: "/app",
	    abstract: true,
	    templateUrl: "js/modules/menu/menu.html",
		controller: 'MenuController as menuController'
	  })

	  .state('app.search', {
	    url: "/search",
	    views: {
	      'menuContent': {
	        templateUrl: "js/modules/search/search.html",
	        
	      }
	    }
	  })

	  .state('app.browse', {
	    url: "/browse",
	    views: {
	      'menuContent': {
	        templateUrl: "js/modules/browse/browse.html"
	      }
	    }
	  })
	  
	 

	  ;
	  // if none of the above states are matched, use this as the fallback
	  $urlRouterProvider.otherwise('/app/browse');
	});