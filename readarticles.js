(function(){
  var app = angular.module('store', ['pascalprecht.translate']);

  app.config(function ($translateProvider) {
  $translateProvider.translations('en', {
    TITLE: 'Hello',
    FOO: 'This is a paragraph.',
    BUTTON_LANG_EN: 'english',
    BUTTON_LANG_DE: 'german'
  });
  $translateProvider.translations('de', {
    TITLE: 'Hallo',
    FOO: 'Dies ist ein Paragraph.',
    BUTTON_LANG_EN: 'englisch',
    BUTTON_LANG_DE: 'deutsch'
  });
  $translateProvider.preferredLanguage('en');
  });

  var appControllers = {};
  // you can pass here the scope as well
  appControllers.CommentsController = function() {
    this.selectComment = function(current) {
		this.tab = current || 1;
	};
	this.isSelected = function(checkComment) {
		return checkComment == this.tab;
	}
  };
  
  appControllers.StoreController = function ($scope, $translate) {
	this.listarts = articles;   
	$scope.changeLanguage = function (key) {
     $translate.use(key);
    };
  };
  
 //  add all controllers at once
 app.controller(appControllers);
 
  var articles = [
  {
  	title: 'What is diabetes',
  	author: 'rem',
  	description: ' a brief article about d2t',
  	views: 2,
  	language: false,
  	canEdit: true,
  	images: [ {
  		thumb: 'assets/edit.png',
  		addmsg: 'assets/add_message.png'
  	},
  	{
  		right: 'assets/arrow_right_green.png',
  		left: 'assets/arrow_left_green.png'
  	}  	]
  },
  {
  	title: 'Successful weight loss and weight management',
  	author: 'päivi',
  	description: ' You might have wondered how some ones manage to stay normal weight their whole lives or lose weight quite easily',
  	views: 1,
  	language: false,
  	canEdit: true,
  	images: [ {
  		thumb: 'assets/edit.png',
  		addmsg: 'assets/add_message.png'
  	},
  	{
  		right: 'assets/arrow_right_green.png',
  		left: 'assets/arrow_left_green.png'
  	}  	]
  }
  ]	
})();

