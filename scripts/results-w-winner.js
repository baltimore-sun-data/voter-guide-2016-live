/* PULL RESULTS FROM JSON FEED AND DISPLAY ON RESULTS PAGES */



function raceResults(races) {

    /* set no cache */
    $.ajaxSetup({ cache: false });



    $.getJSON('http://data.baltimoresun.com/news/elections2016/json/generalResults.json', function(data){ 
        var raceID;
        var location;
        var html = [];
        var html2 = [];
        var html3 = [];
        var precinctsReporting;
        var precinctsTotal;
        var precinctsPercent;
        var forexp = [];
        /* loop through array */
        for(var i = 0; i < races.length; i++){
            raceID = races[i][0];
            location = races[i][1];
            html = [];
            html2 = [];
            html3 = [];
            $.each(data, function(index, key){    
                // forexp.push([key.officename, key.last, key.raceid]) ;
                if (key.fipscode == null & key.raceid == raceID) {

                    /* identify percentage, multiply x 100 and round */
                    var percent = Math.round((key.votepct) * 100);

                    var updated = new Date(key.lastupdated);
                    updated = updated.toString();
                    updated = updated.replace("GMT-0400", " ");

                    var votecount = key.votecount;

                    /* if winner, add check */
                    if (key.winner == true) {
                        won = "winner"
                    } else {
                       won = ""
                    };

                    html.push("<table class=\"candidate-row\"><tr><td class=\"candidate name ", won, "\"> ", key.first, " ", key.last, "</td><td class=\"party-col\">", key.party, "</td><td class=\"votes\">", votecount.toLocaleString('en'), "</td><td class=\"percent\"><div class=\"percent-bar-bg\"><div class=\"percent-bar\" style=\"width:", percent, "%;\"></div></div><div class=\"vote-percent\">", percent, "%</div></td></tr></table>");

                    //pulls the first updated by and displays it up top. not the best solution for sure.
                    html2.push("<span class=\"update\">Updated: " + updated + "</span>");                


                    $(location).html(html.join(''));
                    $(".updated").html(html2);
                    $( ".update" ).last().css( "display", "inline" );
                    if ( html3.length == 0){

                        precinctsReporting = key.precinctsreporting;
                        precinctsTotal = key.precinctstotal;
                        precinctsPercent = key.precinctsreportingpct;
    
    
                        html3.push(" <div class=\"pre\"> " + precinctsReporting + " precincts reporting out of " + precinctsTotal +  ".</div>");                
                    }
                    $(location).append(html3);
                }

            });
            // console.log(forexp);
        };

    });
};



