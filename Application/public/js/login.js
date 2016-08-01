var initLogin = function(){
	  $("form[name='login']").submit(function(evt){
		console.log("escuchando submit");
		  var user = $("input[name='user']").val();
		  var pwd = $("input[name='pwd']").val();
		  
		  var id = app.getUserKey() + Date.now();
		  var obj = {id:id, user:user, pwd:pwd};
		  
		  localStorage.setItem(id, JSON.stringify(obj));
		  
		  router.evalRoute();
		  
		evt.preventDefault();
	});
};