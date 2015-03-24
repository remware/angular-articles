(function(){
  var app = angular.module('store', []);
  app.controller('StoreController', function(){
    this.listarts = articles; 
  });

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

