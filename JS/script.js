
var city;

var apiKey = "&appid=75eb6e5eb20db39b88a78417b81c45f6";

var today = moment().format('LL');



function callApi(city) {

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=75eb6e5eb20db39b88a78417b81c45f6";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response);    

        $("#city").text("Current Weather in " + response.name);
        $("#date").text(today);


        $("#temp").text("Temprature : " + response.main.temp + " C");
        $("#humid").text("Humidity : " + response.main.humidity);
        $("#wind").text("Wind Speed : " + response.wind.speed);
        $("#cond").text("Condition : " + response.weather[0].description);

        var icon = response.weather[0].icon;

        var img = '<img src="https://openweathermap.org/img/w/' + icon + '.png">';

        $('#icon').empty();
        $('#icon').append(img);

    });
}

$("#searchBtn").on("click", function () {

    var city = $("#select-city").val();

    callApi(city);
    previous(city);
    uvData(city);

});

$(".selection").on("click", function () {

    var city = event.target.id;
    callApi(city);
    previous(city);
    uvData(city);



});

function previous(city) {

    var previousURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid=75eb6e5eb20db39b88a78417b81c45f6";

    $.ajax({
        url: previousURL,
        method: "GET"
    }).then(function (response) {



        var myArr = []

        for (var i = 0; i < response.list.length; i++) {

            var arr = response.list[i].dt_txt.split(" ");

            if (arr[1] === "12:00:00") {

                myArr.push(response.list[i]);

                myDate = myArr[0].dt_txt.split(" ");





                var icon1 = myArr[0].weather[0].icon;

                var img1 = '<img src="https://openweathermap.org/img/w/' + icon1 + '.png">';

                $('#icon1').empty();
                $('#icon1').append(img1);





                $("#dateOne").text(myDate[0]);

                $("#temp1").text("Temp : " + myArr[0].main.temp + " C");
                $("#humid1").text("Humid : " + myArr[0].main.humidity);
                $("#des").text(myArr[0].weather[0].description);


            }

        }

        

        myDate1 = (myArr[1].dt_txt.split(" "));

        $("#dateTwo").text(myDate1[0]);
        $("#temp2").text("Temp : " + myArr[1].main.temp + " C");
        $("#humid2").text("Humid : " + myArr[1].main.humidity);
        $("#des1").text(myArr[1].weather[0].description);

        myDate2 = (myArr[2].dt_txt.split(" "));

        $("#dateThree").text(myDate2[0]);
        $("#temp3").text("Temp : " + myArr[2].main.temp + " C");
        $("#humid3").text("Humid : " + myArr[2].main.humidity);
        $("#des2").text(myArr[2].weather[0].description);

        myDate3 = (myArr[3].dt_txt.split(" "));

        $("#dateFour").text(myDate3[0]);
        $("#temp4").text("Temp : " + myArr[3].main.temp + " C");
        $("#humid4").text("Humid : " + myArr[3].main.humidity);
        $("#des3").text(myArr[3].weather[0].description);

        myDate4 = (myArr[4].dt_txt.split(" "));

        $("#dateFive").text(myDate4[0]);
        $("#temp5").text("Temp : " + myArr[4].main.temp + " C");
        $("#humid5").text("Humid : " + myArr[4].main.humidity);
        $("#des4").text(myArr[4].weather[0].description);


        var icon1 = myArr[0].weather[0].icon;
        var icon2 = myArr[1].weather[0].icon;
        var icon3 = myArr[2].weather[0].icon;
        var icon4 = myArr[3].weather[0].icon;
        var icon5 = myArr[4].weather[0].icon;



        var img1 = '<img src="https://openweathermap.org/img/w/' + icon1 + '.png">';
        var img2 = '<img src="https://openweathermap.org/img/w/' + icon2 + '.png">';
        var img3 = '<img src="https://openweathermap.org/img/w/' + icon3 + '.png">';
        var img4 = '<img src="https://openweathermap.org/img/w/' + icon4 + '.png">';
        var img5 = '<img src="https://openweathermap.org/img/w/' + icon5 + '.png">';


        $('#icon1').empty();
        $('#icon1').append(img1);

        $('#icon2').empty();
        $('#icon2').append(img2);

        $('#icon3').empty();
        $('#icon3').append(img3);

        $('#icon4').empty();
        $('#icon4').append(img4);

        $('#icon5').empty();
        $('#icon5').append(img5);


        



    });
}


function uvData(city){

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=75eb6e5eb20db39b88a78417b81c45f6";

    $.ajax({
        url: queryURL + apiKey,
        method: "GET"
    }).then(function (response) {

       var lat = response.coord.lat;
       var lon = response.coord.lon;

    var uvURL = "https://api.openweathermap.org/data/2.5/uvi?=" + apiKey + "&lat=" + lat + "&lon=" + lon;

    $.ajax({
        url: uvURL,
        method: "GET"
    }).then(function (response) {

       console.log(response);

       $("#uv").text("UV : " + response.value);
        
    });

     });




}








