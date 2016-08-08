dashboardInit = function () {
    $("#profile").removeClass("hidden");
    $("#logout").click(function (e) {
        e.preventDefault();
        localStorage.clear();
        $(this).parents("#profile").addClass("hidden");
        router.evalRoute();
    });
    window.onload = getMyLocation;

    function getMyLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(displayLocation);
        }
        else {
            alert("Oops, no geolocation support");
        }
    };

    function displayLocation(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=metric&APPID=b20fc654ff91cf92f57cac39f32a7969"
            , success: function (data) {
                console.log(data);
                $(".city").html(data.name);
                $(".temp").html("°C " + parseInt(data.main.temp));
                $(".icon").css({
                    "background-image": "url(../images/weather/img_destacado/" + data.weather['0'].icon + ".jpg)"
                });
            }
            , error: function (err) {
                console.log(err);
            }
        });
    };
	var url = "https://api.nytimes.com/svc/topstories/v1/home.json";
	url += '?' + $.param({
		'api-key': "9c5565e3261242c5bd215d59c677ce93"
	});
	$.ajax({
		url: url
		, method: 'GET'
	, }).done(function (result) {
		console.log(result);
		var url = result.results[0].multimedia[0].url;
		//$("news-media > img").attr("src=", html( url ) );
		$(".date").html(result.results[0].created_date);
		$(".title").html(result.results[0].title);
		$(".excerpt").html(result.results[0].abstract);
	}).fail(function (err) {
		throw err;
	});
};