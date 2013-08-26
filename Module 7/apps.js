$(function(){

    var server = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';
    
    function search(movie_name) {
        $.ajax({
            url: server,
            dataType: 'jsonp',
            data: {
                q: movie_name,
                page_limit: 15,
                apiKey: 'qtghytkw8cn959m3cygbq3r9'
            },
            success: showMovies
        });
    }
    
   
   function showMovies(response){
        console.log('response', response);
        var movies =  response.movies;

        if(movies.length != 0){
            $('.search-result').show();
            $('.container').append('<div class="found">Displaying ' + movies.length + ' of ' + response.total + '</div>');
            for (var i = 0; i < movies.length; i++){
                var movie = movies[i];
                $('.container').append('<hr><div class="title">' + movie.title + '</div>');
                $('.container').append('<img src = "' + movie.posters.thumbnail + '"/>');
                $('.container').append('<div class="year">Year: ' + movie.year + '</div>');
                $('.container').append("<div class='rating'>Critics' Rating: " + movie.ratings.critics_score + '% </div>');
                $('.container').append('<div class="synopsis">Synopsis: ' + movie.synopsis + '</div>');
                $('.container').append('<div class="cast">Casts: </div>');
                
                var casts = movie.abridged_cast;
                for (var j = 0; j < casts.length; j++){
                    var cast = casts[j];
                    $('.container').append('<div class="cast">' + cast.name + ' as ' + cast.characters + '</div>');
                }
            }
        }else{
            $('.container').append('<div class="noti"><p><b>' + $("#txtbox").val() + '</b> did not match any documents.</p><p>Suggestions:<ul><li>Make sure that all words are spelled correctly.</li><li>Try different keywords.</li><li>Try more general keywords.</li></p></div>');
        }
    }


    $(document).ready(function() {
       $("#search").click(function () {
            $('.container').empty();
            var get = $("#txtbox").val();
                if(get != ""){
                    search(get);
                }else{
                    $('.container').append('<div class="noti"><b>Invalid input!</b></p><p>Suggestions:<ul><li>Make sure that all words are spelled correctly.</li><li>Try different keywords.</li><li>Try more general keywords.</li></p></div>');
                } 
        });
    });

    $(document).ready(function() {
        $("#txtbox").keypress(function(e) {
           $('.container').empty();
            var code = (e.keyCode ? e.keyCode : e.which);
                if(code == 13){
                var get = $("#txtbox").val(); 
                    if(get != ""){
                        search(get);
                    }else{
                        $('.container').append('<div class="noti"><b>Invalid input!</b></p><p>Suggestions:<ul><li>Make sure that all words are spelled correctly.</li><li>Try different keywords.</li><li>Try more general keywords.</li></p></div>');
                    }
                }
        });
    });   

});

 