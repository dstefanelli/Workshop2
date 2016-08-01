router = function(){
	var Router = {};

	Router.evalRoute = function(){
		if(app.isLogged())
			app.loadTemplate("dashboard", dashboardInit);
		else
			app.loadTemplate("login", initLogin);
		
	};

	return Router;
}();

app = function(router){

	var MyApp = {};

	MyApp.init = function(){
		$(document).ready(function(){
		    console.log('--init app function--');
		    router.evalRoute();
		});
	}();
	
	var userKey = "chlogin";
	
	MyApp.getUserKey = function(){
		return userKey;
	}
	
	MyApp.loadTemplate = function(partialName, cbk){
		$( "#main-container" ).load( "partials/"+partialName+".html", cbk);
	};
	
	MyApp.isLogged = function(){
		if(localStorage)
			for(var i=0; i< localStorage.length; i++){
				var key = localStorage.key(i);
				if(key.startsWith(userKey))
				return true;
			}
		return false;
	};

	return MyApp;
}(router);