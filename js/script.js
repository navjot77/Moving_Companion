
// ea39d98ed26c40bf8c5acde1d9f3cec0 API for NY times
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!
    $greeting.text("Coool");
    var street_address = $('#street').val();
    var city = $('#city').val();
    var streetAdress='<img class="bgimg" src="http://maps.googleapis.com/maps/api/streetview?size=600x400&location=%data%">';
    var imgAddress=streetAdress.replace("%data%",street_address+' , '+city);
    console.log(imgAddress);
    $body.append(imgAddress);

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({'api-key': "ea39d98ed26c40bf8c5acde1d9f3cec0", 'sort': "newest",
        'q':city});
    $.ajax({url: url,method: 'GET',}).done(function(data) {
          console.log(data);
        $nytElem.text("");
        articles=data.response.docs;
            for (i=0; i<articles.length; i++) {
                article=articles[i]
                if (typeof article.headline.print_headline == "undefined")
                    console.log("Its undfined");
                else
                $nytElem.append("<li>" + article.headline.print_headline+ "</li>");
            }


    }).error(function(err){
        console.log(err);
        $nytElem.append("<h1>Unable to load tghe page </h2>");

    });



    return false;
};

$('#form-container').submit(loadData);
