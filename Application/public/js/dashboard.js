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
};