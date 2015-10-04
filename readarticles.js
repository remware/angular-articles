(function(){
  var app = angular.module('articles', ['ngRoute','pascalprecht.translate']);
  // using seed translations
  app.config(function ($translateProvider) {
  $translateProvider.translations('en', {
    TITLE: 'Title',
    AUTHOR: 'Author',
    DESCRIBE: 'Description',
    VIEWS: 'Views',
    COMMENTS: 'Comments',
    BUTTON_LANG_EN: 'english',
    BUTTON_LANG_ES: 'español'
  });
  $translateProvider.translations('es', {
    TITLE: 'Titulo',
    AUTHOR: 'Autor',
    DESCRIBE: 'Descripción',
    VIEWS: 'Vistas',
    COMMENTS: 'Comentarios',
    BUTTON_LANG_EN: 'english',
    BUTTON_LANG_ES: 'español'
  });
  
  $translateProvider.preferredLanguage('en');
  });
  // using routes
  
  app.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/en',
		{
			controller: 'CommentsController',
			templateUrl: 'partials/Comments.html'
		})
		.when('/es',
		{
			controller: 'CommentsController',
			templateUrl: 'partials/Comentarios.html'
		})
		.otherwise({ redirectTo: '/en' });
	// configure html5 to get links working on jsfiddle
	//$locationProvider.html5Mode(true); 
  });
  
  var articlesList = [  
  {
  	title: 'What is Baseball',
  	author: 'rem',
  	description: ' a brief article about baseball as sport',
  	views: 2,
  	language: false,
  	canEdit: true,
  	images: [ { thumb: 'assets/edit.png', addmsg: 'assets/add_message.png' },
  	          { right: 'assets/arrow_right_green.png', left: 'assets/arrow_left_green.png' }
            ],
    comments: [""],
  },
  {
  	title: 'What is a dream team',
  	author: 'ware',
  	description: ' a team of people perceived as the perfect combination for a particular purpose.',
  	views: 1,
  	language: false,
  	canEdit: true,
  	images: [ { thumb: 'assets/edit.png', addmsg: 'assets/add_message.png' },
  	          { right: 'assets/arrow_right_green.png', left: 'assets/arrow_left_green.png' }
            ],
    comments: [""],
  }
  ]	
  
  var appControllers = {};
  // you can pass here the scope as well
  appControllers.CommentsController = function($scope, $route, $translate) {
	$scope.listarts = articlesList;   
	$scope.changeLanguage = function (key) {
     $translate.use(key);
    };
    this.selectComment = function(current) {
		this.tab = current || 1;
	};
	this.isSelected = function(checkComment) {
		return checkComment == this.tab;
	};
	$scope.addComment = function() {
		$scope.comments.push(
		{ comment: $scope.newComment.comment})
	};
     // receive modification from UI and add marker if new update
     $scope.addUpdatedItem = function (item) {                 
                console.log(" updated item: " + item.trim());
     };
  };
  
//  add all controllers at once
 app.controller(appControllers);

  // directive
   app.directive('contenteditable', function() {
            return {
                require: 'ngModel',
                scope: {
                    ngModel: '=',     // Bind the text to the object given
                    onReady: '&'     // Pass a reference to the method                                         
                },
                // elm.text() returns the value of text from CDATA nodes since jquery 1.4+
                link: function (scope, elm, attrs, ctrl) {

                    // view -> model
                    elm.bind('blur', function () {
                        scope.$apply(function() {
                            ctrl.$setViewValue(elm.text());
                        });
                        elm.parent().children()[0].className ='updated-cell';
                        scope.onReady(elm.text().trim());
                    });

                    // model -> view
                    ctrl.render = function(value) {
                        elm.html(value);
                    };

                    elm.bind('keydown', function(event) {

                        var esc = event.which === 27,
                            el = event.target;

                        if (esc) {                            
                            ctrl.$setViewValue(elm.text());
                            el.blur();
                            event.preventDefault();                            
                        }                       

                    });

                }
            };
        });

  }
)();

  