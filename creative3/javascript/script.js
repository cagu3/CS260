$(document).ready(function() {
	var submitButton = $("#movieSubmit");
	console.log(submitButton);
	$("#movieSubmit").click(function(e) {
		e.preventDefault();
		var value = $("#movieInput").val();
		console.log(value);
		var myurl= "https://api.themoviedb.org/3/search/movie?api_key=1f6a48b6fec3f6c6456c7a51c3926f44&language=en-US&query=" + value + "&page=1&include_adult=false";
		$.ajax({
		    url : myurl,
		    dataType : "json",
		    success : function(json) {
				console.log(json);
			var results = "";
			results += '<h4><u>Showing results for "' + value + '</u>"</h4><br><br>';
			for (var i=0; i<json.results.length; i++) {
				results += '<h3>Title ' + (i+1) + ': ' + json.results[i].title + '</h3>';
				results += '<h5>Votes: ' + json.results[i].vote_average + '</h5>'
				results += '<h5>Popularity: ' + json.results[i].popularity + '</h5>'
				results += '<img src="http://image.tmdb.org/t/p/w185/' + json.results[i].poster_path + '"/>'
				if (i < json.results.length-1) {results += '<br><br><br> <hr width="80%" noshade size="1px">'}
			}
			$("#movieResults").html(results);
		    }
		});
	});
});
