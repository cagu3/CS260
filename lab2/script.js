
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();


$(document).ready(function() {
	var submitButton = $("#weatherSubmit");
	console.log(submitButton);
	$("#weatherSubmit").click(function(e) {
		e.preventDefault();
		var value = $("#weatherInput").val();
		console.log(value);
	var myurl= "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=929e8a64a9a0a6c7210dbcc8834f18e5";
		$.ajax({
		url : myurl,
		dataType : "json",
			success : function(json) {
			console.log(json);
			//json = json;
			var results = "";
			results += '<h4>Weather in ' + json.name + "</h4>";
			for (var i=0; i<json.weather.length; i++) {
				results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
			}
			results += '<h5 class="weather">Current temperature: ' + json.main.temp + " &deg;F</h5>"
			results += '<p>High: ' + json.main.temp_max + ' &deg;F, Low: ' + json.main.temp_min + " &deg;F</p>";
			results += "<p>Description: "
			for (var i=0; i<json.weather.length; i++) {
				results += json.weather[i].description
			if (i !== json.weather.length - 1)
				results += ", "
			}
			results += "</p>";
			$("#weatherResults").html(results);
			}
		});
	});
});



$(document).ready(function() {
	var submitButton = $("#stackSubmit");
	console.log(submitButton);
	$("#stackSubmit").click(function(e) {
		e.preventDefault();
		var value = $("#stackInput").val();
		console.log(value);
		var myurl= "https://api.stackexchange.com/2.2/search?order=desc&sort=activity&site=stackoverflow&intitle=" + value;
		$.ajax({
		    url : myurl,
		    dataType : "json",
		    success : function(json) {
				console.log(json);
			var results = "";
			results += '<h4>Showing results for "' + value + '"</h4>';
			for (var i=0; i<json.items.length; i++) {
				results +='<h5>Result ' + (i+1) + '</h5>'
				results += '<a href = "' + json.items[i].link + '">' + json.items[i].title + ' </a>'
				if (i < json.items.length-1) {results += '<br><br><br> <hr width="80%" noshade size="1px">'}
				$("#stackResults").html(results);
			}
		    }
		});
	});
});





