dashboardInit = function(){
	
	$("#profile").removeClass("hidden");
	$("#logout").click(function(e){
		e.preventDefault();
		localStorage.clear();
		$(this).parents("#profile").addClass("hidden");
		router.evalRoute();
	});
};