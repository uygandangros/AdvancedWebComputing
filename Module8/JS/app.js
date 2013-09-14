$(function() {

    var app = {};
    
	function search(movie_name) {
        $.ajax({
            url: 'http://api.rottentomatoes.com/api/public/v1.0/movies.json',
            dataType: 'jsonp',
            data: {
                q: movie_name,
                page_limit: 10,
                apiKey: 'qtghytkw8cn959m3cygbq3r9'
            },
            success: showMovies
        });
    }
	
	function clickLink(url) {
        $.ajax({
            url: url,
            dataType: 'jsonp',
            data: {
				page_limit: 10,
                apiKey: 'qtghytkw8cn959m3cygbq3r9'
            },
            success: showMovies
        });
    }
    function getTemplate(template_id, context) {
        var template, $template, markup;
        template = $('#' + template_id);
        $template = Handlebars.compile(template.html());
        markup = $template(context);
        return markup;

    }
    function showMovies(response) {
		$('.home-page').remove();
		$('.navbar').show();
		$('.one').show();
		$(document).ready(function(){
		$('#horiz_container_outer').horizontalScroll();
		});
        app.movies = response.movies;
        var movie, template, $template, markup;
        for (var i = 0; i < app.movies.length; i++) {
                movie = app.movies[i];
                movie._index = i;
				$('#horiz_container').append(getTemplate('movie-posters', movie));
        }
			$('#horiz_container>li').hover(function(ev) {
            var data = $(ev.target).closest('li').data();
            var movie = app.movies[data.id];
			//alert("HI");
            $('.movie-details').html(getTemplate('tpl-movie-detail', movie));
        });
    }
	
	$(document).ready(function() {
       $("#search").click(function () {
           $('#horiz_container>li').remove();
            var get = $("#txtbox").val();
			$('.click-title').html('<h1>' + get + '</h1>');
                if(get != ""){
                    search(get);
                }else{
					alert("Invalid input!");
				} 
        });
    });

    $(document).ready(function() {
        $("#txtbox").keypress(function(e) {
          $('#horiz_container>li').remove();
            var code = (e.keyCode ? e.keyCode : e.which);
                if(code == 13){
                var get = $("#txtbox").val(); 
				$('.click-title').html('<h1>' + get + '</h1>');
                    if(get != ""){
                        search(get);
                    }else{
                        alert("Invalid input!");                    }
                }
        });
    }); 
	
	$(document).ready(function() {
       $(".boxOffice").click(function () {
			$('#horiz_container>li').remove();
			$('.click-title').html('<h1>Box Office</h1>');
			var url = "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json";
              clickLink(url);
        });
    });
	
	$(document).ready(function() {
       $(".inTheaters").click(function () {
			$('#horiz_container>li').remove();
			$('.click-title').html('<h1>In Theaters</h1>');
			var url = "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json";
               clickLink(url);
        });
    });
	
	$(document).ready(function() {
       $(".openingMovies").click(function () {
			$('#horiz_container>li').remove();
			$('.click-title').html('<h1>Opening Movies</h1>');
			var url = "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/opening.json";
              clickLink(url);
        });
    });
	
	$(document).ready(function() {
       $(".upcomingMovies").click(function () {
			$('#horiz_container>li').remove();
			$('.click-title').html('<h1>Upcoming Movies</h1>');
			var url = "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json";
               clickLink(url);
        });
    });
	
	$(document).ready(function() {
       $(".topRentals").click(function () {
			$('#horiz_container>li').remove();
			$('.click-title').html('<h1>Top Rentals</h1>');
			var url = "http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/top_rentals.json";
                clickLink(url);
        });
    });
	
	$(document).ready(function() {
       $(".currentRelease").click(function () {
			$('#horiz_container>li').remove();
			$('.click-title').html('<h1>Current Release</h1>');
			var url = "http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/current_releases.json";
                clickLink(url);
        });
    });
	
	$(document).ready(function() {
       $(".newRelease").click(function () {
			$('#horiz_container>li').remove();
			$('.click-title').html('<h1>New Release</h1>');
			var url = "http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/new_releases.json";
                clickLink(url);
        });
    });
	
	$(document).ready(function() {
       $(".upcomingDVDs").click(function () {
	   $('#horiz_container>li').remove();
	   $('.click-title').html('<h1>Upcoming DVDs</h1>');
			var url = "http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/upcoming.json";
                clickLink(url);
        });
    });
	
	$(document).ready(function() {
       $("#about").click(function () {
	   $('.one').remove();
	   $('.two').show();
        });
    });
	
	$(document).ready(function() {
       $("#movieSearch").click(function () {
	   $('.navbar').remove();
	   $('.one').remove();
	   $('.two').remove();
	   $('home-page').show();
        });
    });
	
});