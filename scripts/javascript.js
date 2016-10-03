//////////////////////// JAVASCRIPT FOR VOTERS GUIDE /////////////////////

//Placeholder global variable, populated by other functions and used for sharing answers
var shown_answers = {"q1":"","q2":"","q3":"","q4":"","q5":"","q6":"","q7":""};




// SPLASH PAGE FUNCTION
	// swap out the city / state races on click and swap the button styles

function swapRace() {

	if ( $("#city-races").is(":visible")  ) {

	  $('#city-races').hide();
	  $('#city-button').removeClass("selected");
	  $('#state-races').show();
	  $('#state-button').addClass("selected");

    } else {

	  $('#state-races').hide();
	  $('#state-button').removeClass("selected");
	  $('#city-races').show();
	  $('#city-button').addClass("selected");

     }
};

//make a url that will default to the state races

function stateLink() {

	if(location.href == "http://data.baltimoresun.com/voter-guide-2016/indeeex.html?senate"){
	      $("#city-races").hide();
	      $("#state-races").show();

	}

};




// RACE PAGE FUNCTIONS -- (CITY COUNCIL AND CONGRESS)



//This function controls the CHOOSE DISTRICT drop down in the smaller race pages

function raceNav(raceData,race) {
	//Clear the candidate list navigation 
  $('#race-candidate-nav').empty();
 	//Clear current list of candidates from page
  $('#democrats').empty(); 
 
  $('#republicans').empty(); 

  $('#greens').empty(); 

  $('#message').empty(); 

 	//Populate the function below based on a parameter passed in the dropdown
  populateData(raceData,race);

};






//This function populates the smaller races pages-- council and senate-- based on json data.



function populateData(data, race) {
  var code;
  var subnav;
  var questionaire

  for (var key in data){


	//This sets the class in the questionaires to dem or rep depending on party  	         
	var partyClass 

	if (data[key]["party"] == "Democrat") {
		partyClass = "dem";	
	};

	if (data[key]["party"] == "Republican") {
		partyClass = "rep";	
	};

	if (data[key]["party"] == "Green") {
		partyClass = "ltgreenbg";	
	};

	if (data[key]["party"] == "Libertarian") {
		partyClass = "libertarian";	
	};

	if (data[key]["party"] == "Unaffiliated") {
		partyClass = "unaffiliated";	
	};

	//This displays a different questionaire depending on what race is being called 	         
	if  (race == "citycouncil") {

		questionaire = '';
		questionaire += '<div id="question-1" class="question medium left"><header class="question-header medium"><div class="question-num medium ' +partyClass + '"> 1 </div>District</header>';
		questionaire += '<div class="question-text medium ' +partyClass + '">What are the most pressing issues in your district, and how would you address them?</div>';
		questionaire += '<div class="answer medium"><strong>' +data[key]["candidateName"] + '</strong>: ' +  data[key]["q1"] + ' </p></div> <!-- /answer --></div> <!-- /question-1 -->';
		questionaire += '<div id="question-2" class="question medium left"><header class="question-header medium"><div class="question-num medium ' +partyClass + '"> 2 </div>Crime</header>';
		questionaire += '<div class="question-text medium ' +partyClass + '"> Is Baltimore pursuing the right strategies to reduce violent crime? Do you have confidence in the Police Department’s current leadership? What steps would you take as mayor to improve police-community relations?</div>';
		questionaire += '<div class="answer medium"><strong>' +data[key]["candidateName"] + '</strong>: ' +  data[key]["q2"] + ' </p></div> <!-- /answer --></div> <!-- /question-2 -->';
		questionaire += '<div id="question-3" class="question medium left"><header class="question-header medium"><div class="question-num medium ' +partyClass + '"> 3 </div>Freddie Gray</header>';
		questionaire += '<div class="question-text medium ' +partyClass + '">  What lessons do you draw from the death of Freddie Gray and the subsequent protests and unrest?</div>';
		questionaire += '<div class="answer medium"><strong>' +data[key]["candidateName"] + '</strong>: ' +  data[key]["q3"] + ' </p></div> <!-- /answer --></div> <!-- /question-3 -->';
		questionaire += '<div id="question-4" class="question medium left"><header class="question-header medium"><div class="question-num medium ' +partyClass + '"> 4 </div>Taxes</header>';
		questionaire += '<div class="question-text medium ' +partyClass + '">  Should Baltimore reduce its property tax rate, and if so, how? What is your view of the city’s use of tax increment financing, payments in lieu of taxes and other incentives to encourage developments like Harbor Point?</div>';
		questionaire += '<div class="answer medium"><strong>' +data[key]["candidateName"] + '</strong>: ' +  data[key]["q4"] + ' </p></div> <!-- /answer --></div> <!-- /question-4 -->';
		questionaire += '<div id="question-5" class="question medium left"><header class="question-header medium"><div class="question-num medium ' +partyClass + '"> 5 </div>Neighborhood revitalization</header>';
		questionaire += '<div class="question-text medium ' +partyClass + '"> What can Baltimore do to encourage commercial and residential revitalization in neighborhoods away from the waterfront? How do you evaluate Vacants to Value and Governor Hogan’s recently announced effort to combat blight?</div>';
		questionaire += '<div class="answer medium"><strong>' +data[key]["candidateName"] + '</strong>: ' +  data[key]["q5"] + ' </p></div> <!-- /answer --></div> <!-- /question-5 -->';
		questionaire += '<div id="question-6" class="question medium left"><header class="question-header medium"><div class="question-num medium ' +partyClass + '"> 6 </div>Economic development</header>';
		questionaire += '<div class="question-text medium ' +partyClass + '"> What are the chief barriers to economic development and job creation in Baltimore? How would you address them?</div>';
		questionaire += '<div class="answer medium"><strong>' +data[key]["candidateName"] + '</strong>: ' +  data[key]["q6"] + ' </p></div> <!-- /answer --></div> <!-- /question-6 -->';
		questionaire += '<div id="question-7" class="question medium left"><header class="question-header medium"><div class="question-num medium ' +partyClass + '"> 7 </div>City governance</header>';
		questionaire += '<div class="question-text medium ' +partyClass + '"> Is the current balance of power between the mayor and City Council appropriate, or would you seek to change it? How?</div>';
		questionaire += '<div class="answer medium"><strong>' +data[key]["candidateName"] + '</strong>: ' +  data[key]["q7"] + ' </p></div> <!-- /answer --></div> <!-- /question-7 -->';
		questionaire += '<div id="question-8" class="question medium left"><header class="question-header medium"><div class="question-num medium ' +partyClass + '"> 8 </div>Council’s role</header>';
		questionaire += '<div class="question-text medium ' +partyClass + '"> Has the City Council been focused on the right issues? What are the most important issues it has dealt with in the last four years?</div>';
		questionaire += '<div class="answer medium"><strong>' +data[key]["candidateName"] + '</strong>: ' +  data[key]["q8"] + ' </p></div> <!-- /answer --></div> <!-- /question-8 -->';
		questionaire += '<div id="question-9" class="question medium left"><header class="question-header medium"><div class="question-num medium ' +partyClass + '"> 9 </div>City services</header>';
		questionaire += '<div class="question-text medium ' +partyClass + '"> What weaknesses do you see in the delivery of city services? What can be done to improve response time and resident satisfaction?</div>';
		questionaire += '<div class="answer medium"><strong>' +data[key]["candidateName"] + '</strong>: ' +  data[key]["q9"] + ' </p></div> <!-- /answer --></div> <!-- /question-9 -->';
		questionaire += '<div id="question-10" class="question medium left"><header class="question-header medium"><div class="question-num medium ' +partyClass + '"> 10 </div>Reason for running</header>';
		questionaire += '<div class="question-text medium ' +partyClass + '">Why are you running for office?</div>';
		questionaire += '<div class="answer medium"><strong>' +data[key]["candidateName"] + '</strong>: ' +  data[key]["q10"] + ' </p></div> <!-- /answer --></div> <!-- /question-10 -->';

	};


	if  (race == "congress") {

		questionaire = '';
		questionaire += '<div id="question-1" class="question medium left"><header class="question-header medium"><div class="question-num medium ' +partyClass + '"> 1 </div>Iran</header>';
		questionaire += '<div class="question-text medium ' +partyClass + '">What is your view of the international agreement intended to stop Iran from developing nuclear weapons?</div>';
		questionaire += '<div class="answer medium"><strong>' +data[key]["candidateName"] + '</strong>: ' +  data[key]["q1"] + ' </p></div> <!-- /answer --></div> <!-- /question-1 -->';
		
		questionaire += '<div id="question-2" class="question medium left"><header class="question-header medium"><div class="question-num medium ' +partyClass + '"> 2 </div>ISIS</header>';
		questionaire += '<div class="question-text medium ' +partyClass + '"> What strategy should the United States pursue to protect itself and its allies from ISIS?</div>';
		questionaire += '<div class="answer medium"><strong>' +data[key]["candidateName"] + '</strong>: ' +  data[key]["q2"] + ' </p></div> <!-- /answer --></div> <!-- /question-2 -->';
		
		questionaire += '<div id="question-3" class="question medium left"><header class="question-header medium"><div class="question-num medium ' +partyClass + '"> 3 </div>Trade</header>';
		questionaire += '<div class="question-text medium ' +partyClass + '"> Do you support the Trans-Pacific Partnership? Have free trade deals generally been good for the U.S.?</div>';
		questionaire += '<div class="answer medium"><strong>' +data[key]["candidateName"] + '</strong>: ' +  data[key]["q3"] + ' </p></div> <!-- /answer --></div> <!-- /question-3 -->';
		questionaire += '<div id="question-4" class="question medium left"><header class="question-header medium"><div class="question-num medium ' +partyClass + '"> 4 </div>Obamacare</header>';
		questionaire += '<div class="question-text medium ' +partyClass + '"> Name one thing you would do to improve the functioning of the Affordable Care Act.</div>';
		questionaire += '<div class="answer medium"><strong>' +data[key]["candidateName"] + '</strong>: ' +  data[key]["q4"] + ' </p></div> <!-- /answer --></div> <!-- /question-4 -->';
		questionaire += '<div id="question-5" class="question medium left"><header class="question-header medium"><div class="question-num medium ' +partyClass + '"> 5 </div>Financial regulation</header>';
		questionaire += '<div class="question-text medium ' +partyClass + '"> Are the steps Congress and the Obama administration took to increase regulation of Wall Street in the wake of the financial crisis appropriate? Does more need to be done?</div>';
		questionaire += '<div class="answer medium"><strong>' +data[key]["candidateName"] + '</strong>: ' +  data[key]["q5"] + ' </p></div> <!-- /answer --></div> <!-- /question-5 -->';
		questionaire += '<div id="question-6" class="question medium left"><header class="question-header medium"><div class="question-num medium ' +partyClass + '"> 6 </div>Obama legacy</header>';
		questionaire += '<div class="question-text medium ' +partyClass + '"> How would you characterize President Barack Obama’s legacy? What are his greatest accomplishments and failures?</div>';
		questionaire += '<div class="answer medium"><strong>' +data[key]["candidateName"] + '</strong>: ' +  data[key]["q6"] + ' </p></div> <!-- /answer --></div> <!-- /question-6 -->';
		questionaire += '<div id="question-7" class="question medium left"><header class="question-header medium"><div class="question-num medium ' +partyClass + '"> 7 </div>Workforce issues</header>';
		questionaire += '<div class="question-text medium ' +partyClass + '"> Do you support an increase in the federal minimum wage, and to what level? Should the federal government require paid sick time or family leave?</div>';
		questionaire += '<div class="answer medium"><strong>' +data[key]["candidateName"] + '</strong>: ' +  data[key]["q7"] + ' </p></div> <!-- /answer --></div> <!-- /question-7 -->';
		questionaire += '<div id="question-8" class="question medium left"><header class="question-header medium"><div class="question-num medium ' +partyClass + '"> 8 </div>Guns</header>';
		questionaire += '<div class="question-text medium ' +partyClass + '"> What steps should Congress take to reduce the toll of gun violence?</div>';
		questionaire += '<div class="answer medium"><strong>' +data[key]["candidateName"] + '</strong>: ' +  data[key]["q8"] + ' </p></div> <!-- /answer --></div> <!-- /question-8 -->';
		questionaire += '<div id="question-9" class="question medium left"><header class="question-header medium"><div class="question-num medium ' +partyClass + '"> 9 </div>Redistricting</header>';
		questionaire += '<div class="question-text medium ' +partyClass + '"> Does the process by which congressional district lines are drawn need to be reformed? Should the issue be handled on the federal or state level?</div>';
		questionaire += '<div class="answer medium"><strong>' +data[key]["candidateName"] + '</strong>: ' +  data[key]["q9"] + ' </p></div> <!-- /answer --></div> <!-- /question-9 -->';
		questionaire += '<div id="question-10" class="question medium left"><header class="question-header medium"><div class="question-num medium ' +partyClass + '"> 10 </div>Reason for running</header>';
		questionaire += '<div class="question-text medium ' +partyClass + '"> Why are you running for office?</div>';
		questionaire += '<div class="answer medium"><strong>' +data[key]["candidateName"] + '</strong>: ' +  data[key]["q10"] + ' </p></div> <!-- /answer --></div> <!-- /question-10 -->';

	};



function racePageMarkup() {


		// If q1 is blank, say there is no questionaire. Otherwise, deliver the toggle button
		if(data[key]["q1"] == "") {
			var questionaireLink = "<div class='notoggle ltgreybg'>NO QUESTIONNAIRE SUBMITTED"
			} else {
				questionaireLink = "<div class='toggle ";
				questionaireLink += data[key]["party"].toLowerCase();
				questionaireLink += "bg'>+ Sun Editorial Questionnaire";
			};      	

	
	// If website, twitter or FB are empty, don't display the icons

	if (data[key]["twitter"] == "") {
			var twitterLink = "";
		} else {
			var twitterLink = "<span class=\"twitter\"><a target=\"_new\" href=\"http://www.twitter.com/";
			twitterLink += data[key]["twitter"]; 
			twitterLink +="\"><span class=\"icon-twitter "; 
			twitterLink += data[key]["party"].toLowerCase();
			twitterLink +="-color\"></a></span>";
			};

	if (data[key]["facebook"] == "") {
			var facebookLink = "";
		} else {
			var facebookLink = "<span class=\"facebook\"><a target=\"_new\" href=\"http://www.";
			facebookLink += data[key]["facebook"];
			facebookLink += "\"><span class=\"icon-facebook ";
			facebookLink += data[key]["party"].toLowerCase();			
			facebookLink += "-color\"></a></span></li>";
			};

	if (data[key]["website"] == "") {
			var websiteLink = "";
		} else {
			var websiteLink = "<li><span class=\"website\"><a target=\"_new\" href=\"http://www.";
			websiteLink += data[key]["website"];
			websiteLink += "\"><span class=\"icon-globe ";
			websiteLink += data[key]["party"].toLowerCase();			
			websiteLink += "-color\"></a></span>";	
			};

	//If photo is blank, here is how to handle	
	if (data[key]["photo"] == "") {
			var candidatePhoto = "";

		} else {
			candidatePhoto = "<div class=\"cand-pic-race ";
			candidatePhoto += data[key]["party"].toLowerCase();
			candidatePhoto += "\"> <img src=\"../images/candidates/";	
			candidatePhoto += data[key]["photo"].replace(/\s+/g, '-').toLowerCase();
			candidatePhoto += ".jpg\" class=\"cand-pic\"/> </div>";	

			};
	
	if (data[key]["livesIn"] == "") {
			var livesIn = "";
		} else {
			livesIn = " | <span class=\"lives race\">Lives in ";
			livesIn += data[key]["livesIn"];
			livesIn += "</span></li>";
			};

	if (data[key]["age"] == "") {
			var age = "";
		} else {
			age = "<li><span class=\"age race\">Age ";
			age += data[key]["age"];
			age += "</span>";
			};


	if (data[key]["endorsed"] == "yes") {
			var endorsed = "<div style=\"clear:both;\"></div><div class=\"endorsed\">Endorsed by The Sun</div>";
		} else {
			var endorsed = "";
			};






	// write the actual html for each loop

  	code = '';
    code += '<!-- cand-bio --><div class="cand-bio" id="' +  data[key]["candidateLastName"].replace(/\s+/g, '-').replace(/\./g,'').toLowerCase() + '">';
	code += candidatePhoto;
	code += '<div class="cand-bio-text">';
	code += '<div class="cand-name race ' + data[key]["party"].toLowerCase() +'-color">' + data[key]["candidateName"] +'</div>';
	code += '<div class="cand-details"><ul>';
	code += websiteLink;
	code += twitterLink;
	code += facebookLink;
	code += '<li><span class="party ' + data[key]["party"].toLowerCase() +'-color">' + data[key]["party"] +'</span></li>';
	code += age;
	code += livesIn;
	code += '<span class="bio race"><p>' + data[key]["bio"] +'</p></span></ul>' + endorsed + '</div>';
	code += questionaireLink + '</div>';
	code += '<div class="questionaire" style="display:none;">';
	code += questionaire
	code += '<div style="clear:both;"></div><a href="#' + data[key]["candidateLastName"].replace(/\s+/g, '-').replace(/\./g,'').toLowerCase() + '" class="top' + data[key]["party"].toLowerCase() +'">&#8593; TOP</a></div>';
	code += '</div></div></div> <!-- /cand-bio --><div class="clear"></div>';

};



	//This populates the candidate subnav for the race pages
		// Loop through all and create anchor links for each candidate
	subnav ='';
	subnav += '<a href="#' +  data[key]["candidateLastName"].replace(/\s+/g, '-').replace(/\./g,'').toLowerCase() + '">' + data[key]["candidateName"] + '</a> |';
	$("#race-candidate-nav").append(subnav);


	// Loop through and populate democratic candidates
		// This could be improved by creating a new loop to popiulate the questions and answers

	 if(data[key]["party"] == "Democrat") {

		racePageMarkup();

	// place the html above in this div
    	$("#democrats").append(code);

	// This checks to see if there are any dem candidates for the race. If there are, it adds a header that says DEMOCRATS
	if( $('#democrats').is(':empty') ) {
		 $("#democrat-header").text("");
	} else {
		 $("#democrat-header").text("DEMOCRATS");

	}

  }


// Loop through and populate republican candidates

  	if(data[key]["party"] == "Republican") {

  		racePageMarkup();


    $("#republicans").append(code);
  }

	// This checks to see if there are any republican candidates for the race. If there are, it adds a header that says REPUBLICANS
	if( $('#republicans').is(':empty') ) {
		 $("#republican-header").text("");
	} else {
		 $("#republican-header").text("REPUBLICANS");

	}




  	if(data[key]["party"] == "Green") {

  		racePageMarkup();


    $("#greens").append(code);
  }

	// This checks to see if there are any republican candidates for the race. If there are, it adds a header that says REPUBLICANS
	if( $('#greens').is(':empty') ) {
		 $("#green-header").text("");
	} else {
		 $("#green-header").text("GREENS");

	}



  	if(data[key]["party"] == "Libertarian") {

  		racePageMarkup();

    $("#libertarian").append(code);
  }




  	if(data[key]["party"] == "Unaffiliated") {

  		racePageMarkup();

    $("#unaffiliated").append(code);
  }

	




}





	//Populate race title
	$("#race-title").text(data[key]["district"]);
	$("#chooseDistrictText").text(data[key]["district"]);

	//This controls the show/hide toggle for the questionaires
	$(".toggle").click(function(){
	    $(this).next("div").slideToggle("slow");

	         if ($(this).text() == "+ Sun Editorial Questionnaire") 
		  { 
	     		$(this).text("- Close Questionnaire"); 
	  	  } 
	  	else  { 
	     		$(this).text("+ Sun Editorial Questionnaire"); 
		};
	})



	//This controls the show/hide toggle for the questionaires
	$(".bio-toggle").click(function(){
	    $(this).next("div").slideToggle("slow");

		 if ($(this).text() == "+ CANDIDATE BIO") 
		  { 
	     		$(this).text("- Close Bio"); 
	  	  } 
	  	else  { 
	     		$(this).text("+ CANDIDATE BIO"); 
		};

	})


	//This controls the bottom show/hide toggle for the questionaires, currently hidden because not working
	$(".toggle2").click(function(){
	    $(this).parent("div").toggle();

		 var element_to_scroll_to = document.getElementById("#testing");

		element_to_scroll_to.scrollIntoView();

		 if ($(".toggle").text() == "- Close Questionnaire") 
	  	{ 
	     		$(".toggle").text("+ Sun Editorial Questionnaire"); 
		};

	   })

	//Smooth scroll for the candidate name navigation. Applies smooth scroll to anything with a hash
	 $('a[href^="#"]').on('click',function (e) {
	      e.preventDefault();

	      var target = this.hash;
	      var $target = $(target);

	      $('html, body').stop().animate({
	          'scrollTop': $target.offset().top
	      }, 900, 'swing', function () {
	          window.location.hash = target;
	      });
	  });


};


    // FACEBOOK  / TWITTER BUTTONS 
    	//this function is called onto each page and then the individual page message is populated on each page


            function share(socialMessage){


              $(".icon-twitter.top").on("click", function(){

                var tweet = socialMessage; 
                var url = window.location.href ; //Interactive URL

                var twitter_url = "https://twitter.com/intent/tweet?text="+tweet+"&url="+url+"&tw_p=tweetbutton";
                window.open(twitter_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;

              });


              $(".icon-facebook.top").on("click", function(){

                var picture = "http://www.trbimg.com/img-53fdf16a/turbine/bal-baltimore-default-facebook-icon"; //Picture URL
                var title = "Baltimore Sun Voter Guide 2016"; //Post title
                var description = socialMessage;  //Post description
              

                var url = window.location.href; //Interactive URL

                  var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link="+url+"&picture="+picture+"&name="+title+"&description="+description+"&redirect_uri=http://www.facebook.com";        
                window.open(facebook_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;

              });
              
            }


// END RACE PAGE FUNCTIONS





//This pulls together various functions for the candidate pages -- mayor and senate

var app = {

	init: function(){

		app.news_animation();
		app.questionnaire_nav();
		app.toggle_answers();
		app.all_candidates_toggle();
		//app.share_answer();
		//app.toggle_fixed_nav();
		//app.load_finance_graph("total");
		//app.toggle_finance_graph();
		//app.load_poll_graph("dem");
		app.questionnaire_hash();
		//app.share();
		app.mobile_nav();
	},



// This populates the candidate pages-- mayor and senate -- based on json data

load_candidate_data: function(candidateData) {
		$("#party").html(candidateData["party"]);
		$("#job").html(candidateData["job"]);
		$("#cand-pic").find(".cand-pic").attr("src", "../images/candidates/"+candidateData["photo"].replace(/\s+/g, '-').toLowerCase()+".jpg");
		$("#nav-photo").find(".nav-photo").attr("src", "../images/candidates-no-bg/"+candidateData["photo"].replace(/\s+/g, '-').toLowerCase()+".jpg");
		$("#cand-name").html(candidateData["candidateName"]);
		$("#bio-text").html(candidateData["bio"]);
		$("#bio").find(".section-header").html("About " + candidateData["candidateLastName"]);
		$("#cand-pic").find(".cand-pic").addClass(candidateData["party"].toLowerCase());
		$("#bio").find(".section-header").addClass(candidateData["party"].toLowerCase());
		$("#background").find(".section-header").addClass(candidateData["party"].toLowerCase());
		$("#news").find(".section-header").addClass(candidateData["party"].toLowerCase());
		$("#questionnaire").find(".section-header").addClass(candidateData["party"].toLowerCase());
		$("#all-candidates").find("."+candidateData["candidateLastName"].replace(/\s+/g, '-').replace(/\./g,'').toLowerCase()).addClass("no-display");

		//if these values are NOT empty, populate

		if (candidateData["twitter"] !== "") {
			$("#social").find(".twitter-link").attr("href", "https://www.twitter.com/"+candidateData["twitter"]);
			$("#social").find(".twitter-link").html("&nbsp;&nbsp;"+candidateData["twitter"]);

			}

		if (candidateData["website"] !== "") {
			$("#social").find(".website-link").attr("href", "http://www."+candidateData["website"]);
			$("#social").find(".website-link").html("&nbsp;&nbsp;"+candidateData["website"]);

			}

		
		if (candidateData["facebook"] !== "") {
			$("#social").find(".facebook-link").attr("href", "https://www."+candidateData["facebook"]);
			$("#social").find(".facebook-link").html("&nbsp;&nbsp;"+candidateData["facebook"]);	

			}
		

		if (candidateData["age"] !== "") {
				$("#age").html("Age " + candidateData["age"]);	

			}
		
		if (candidateData["livesIn"] !== "") {
				$("#lives").html("Lives in " + candidateData["livesIn"]);	

			}

		if (candidateData["graduatedFrom"] !== "") {
				$("#graduated").html("Graduated from " + candidateData["graduatedFrom"]);

			}
		


		if (candidateData["party"] == "Democrat") {
				$("#questionnaire").addClass("dem");
					$("#social").addClass("dem");
					$("#party").addClass("blue");
					$("#cand-name").addClass("blue");
					$("#all-candidates-toggle-button").addClass("blue");
			}

		if (candidateData["party"] == "Green") {
				$("#questionnaire").addClass("gre");
					$("#social").addClass("greencolor");
					$("#party").addClass("greencolor");
					$("#cand-name").addClass("greencolor");
					$("#all-candidates-toggle-button").addClass("green");
			}

		if (candidateData["party"] == "Libertarian") {
				$("#questionnaire").addClass("lib");
					$("#social").addClass("yellow");
					$("#party").addClass("yellow");
					$("#cand-name").addClass("yellow");
					$("#all-candidates-toggle-button").addClass("yellow");
			}



		if (candidateData["party"] == "Republican") {
				$("#social").addClass("rep");
				$("#questionnaire").addClass("rep");
				$("#party").addClass("red");
				$("#cand-name").addClass("red");
				$("#all-candidates-toggle-button-rep").addClass("red");
			}
	// If website, twitter or FB are empty, don't display the icons
		if (candidateData["website"] == "") {
			$(".icon-globe.side").addClass("no-display");
			}


		if (candidateData["twitter"] == "") {
			$(".icon-twitter.side").addClass("no-display");
			}

		if (candidateData["facebook"] == "") {
			$(".icon-facebook.side").addClass("no-display");
			}


		//Show or hide the candidate navigation on the senate page based on party. Both are included on the senate page
		if (candidateData["party"] == "Democrat") {
			$(".senate-rep").addClass("no-display");
			}

		if (candidateData["party"] == "Republican") {
			$(".senate-dem").addClass("no-display");
			}
		if (candidateData["party"] == "Green") {
			$(".senate-dem").addClass("no-display");

			}

	},


	//these are the toggle buttons for the cadidate navigation toggle buttons on the senate page
	all_candidates_toggle: function(){

		$("#all-candidates-toggle-button").click(function(){
		    $("#all-candidates-toggle").slideToggle("fast");

 if ($("#all-candidates-toggle-button").text() == "+ SHOW MORE") 
		  { 
	     		$("#all-candidates-toggle-button").text("- SHOW LESS"); 
	  	  } 
	  	else  { 
	     		$("#all-candidates-toggle-button").text("+ SHOW MORE"); 
		};

		});


		$("#all-candidates-toggle-button-rep").click(function(){
		    $("#all-candidates-toggle-rep").slideToggle("fast");

 if ($("#all-candidates-toggle-button-rep").text() == "+ SHOW MORE") 
		  { 
	     		$("#all-candidates-toggle-button-rep").text("- SHOW LESS"); 
	  	  } 
	  	else  { 
	     		$("#all-candidates-toggle-button-rep").text("+ SHOW MORE"); 
		};

		});



	},



	news_animation: function(){

		$(document).on("mouseenter","#news ul li", function(){
			$("#news ul li").addClass("faded");
			$(this).removeClass("faded");
		}).on("mouseleave","#news ul li", function(){
			$("#news ul li").removeClass("faded");
		});
	}, 

	questionnaire_nav: function(){

		//Define a variable to house the setTimeout
		var default_text;

		$("#questionnaire-nav ul li").hover(function(){
			clearTimeout(default_text);
			$("#questionnaire-nav div").html($(this).attr("data-subject"));
		}, function(){
			default_text = setTimeout(function(){
				$("#questionnaire-nav div").html("Jump to:");
			}, 1000);
		});

		$("#questionnaire-nav ul li").click(function(){

			//We have to do some math because of the fixed nav

			//Find vertical displacement of the question we want to scroll to
			var q_position = $("#question-"+$(this).html()).offset();
			$.scrollTo(q_position.top-85, 800);
		});



	},

	questionnaire_hash: function(){

		var q = Number(window.location.hash.slice(1));

		if (q >= 1 & q <= 12){

			console.log("evaluated");
			var q_position = $("#question-"+q).offset();

			if ($(".container").css("width") === "1000px"){ //If desktop version...

				//Scroll to that position minus 85px to accomodate the menu				
				$.scrollTo(q_position.top-85, 0);

			} else { //If mobile...

				$.scrollTo(q_position.top, 0);

			}

		}

	},

	load_answer: function(qnum, candidate){

		//Load headshot
		//$("#question-"+qnum).find(".answer-headshot").attr("src","../images/candidates-no-bg/"+(window[candidate]["candidateLastName"].replace(/\s+/g, '-').toLowerCase())+".jpg");

		//Change name
		$("#question-"+qnum).find(".speaker").html(window[candidate]["candidateLastName"]);

		//Insert the first paragraph (done so separately bc of the headshot)
		$("#question-"+qnum).find(".first-para").html(window[candidate]["q"+qnum+"p1"]);



		// If q1 is blank, hide and questionnaire section and say there is no questionaire. 
		if(window[candidate]["q"+qnum+"p1"] == "") {
			$("#questionnaire-senate").hide();			
			$("#message").show();
			};


		//Append the rest of the answer
		$("#question-"+qnum).find(".other-paras").append(window[candidate]["q"+qnum+"p2"]);

	},

	load_all_answers: function(candidate){

		for (var i = 1; i <=12; i++){

			//Load the answer text and share text
			app.load_answer(i,candidate);
			app.share_answer();

			//Add the "selected" class to all seven tabs of this candidate
			$("#question-"+i+" .answer ul").find('[data-cand="'+candidate+'"]').addClass("selected");

			//Add this candidates name to the "shown_answers" array, which notes which candidate's answer is currently visible (used for social puposes)
			shown_answers["q"+i] = candidate;

		}

	},



	load_all_answers_senate: function(candidate){

		for (var i = 1; i <=11; i++){

			//Load the answer text and share texy
			app.load_answer(i,candidate);
			app.share_answer_senate();

			//Add the "selected" class to all seven tabs of this candidate
			$("#question-"+i+" .answer ul").find('[data-cand="'+candidate+'"]').addClass("selected");

			//Add this candidates name to the "shown_answers" array, which notes which candidate's answer is currently visible (used for social puposes)
			shown_answers["q"+i] = candidate;

		}

	},

	toggle_answers: function(){

		$(".question-candidates ul li").click(function(){

			//Grab which question and which candidate
			var qnum = $(this).attr("data-q");
			var candidate = $(this).attr("data-cand");

			//Clear the .other-paras container
			$("#question-"+qnum).find(".other-paras").html("");

			//Change the text
			app.load_answer(qnum, candidate);

			//Update list style
			$(this).parent().find("li").removeClass("selected");
			$(this).addClass("selected");

			//Update the "shown_answers" array, which notes which candidate's answer is currently visible (used for social puposes)
			shown_answers["q"+qnum] = candidate;

		});

	},

	share_answer: function(){

		$(".answer-social .icon-twitter").click(function(){

			var qnum = $(this).parent().data("num");
			var current_candidate = shown_answers["q"+qnum]

			var share_text = app.generate_share_text(current_candidate, qnum);

			var twitter_url = "https://twitter.com/intent/tweet?text="+share_text[0]+"&url="+share_text[1]+"&tw_p=tweetbutton";
			window.open(twitter_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;


		});

		$(".answer-social .icon-facebook").click(function(){

			var qnum = $(this).parent().data("num");
			var current_candidate = shown_answers["q"+qnum]

			var share_text = app.generate_share_text(current_candidate, qnum);

			var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link="+share_text[1]+"&picture=http://data.baltimoresun.com/voter-guide/images/candidates/"+current_candidate+".jpg&name=Baltimore Sun Voter Guide Q%26A&description="+share_text[0]+"&redirect_uri=http://data.baltimoresun.com/voter-guide";
			window.open(facebook_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;


		});		


	},

	generate_share_text: function(candidate, question){

		var name;
		var issue;

		switch(candidate){

		case "dixon": name = "Sheila Dixon"; break;
		case "clifton": name = "Mack Clifton"; break;
		case "cupid": name = "Gersham Cupid"; break;
		case "embry": name = "Elizabeth Embry"; break;
		case "gutierrez": name = "Patrick Gutierrez"; break;
		case "mckesson": name = "DeRay Mckesson"; break;
		case "mosby": name = "Nick Mosby"; break;
		case "pugh": name = "Catherine E. Pugh"; break;
		case "stokes": name = "Carl Stokes"; break;
		case "walsh": name = "Cindy Walsh"; break;
		case "warnock": name = "David Warnock"; break;
		case "young": name = "Calvin Allen Young III"; break;
		case "wilson": name = "Wilton Wilson"; break;
		case "girard": name = "Armand F. Girard"; break;
		case "torbit": name = "Chancellor Torbit"; break;
		case "walden": name = "Alan Walden"; break;
		case "wardlow": name = "Larry O. Wardlow Jr."; break;
		case "vaeth": name = "Brian Charles Vaeth"; break;
		case "harris": name = "Joshua Harris"; break;
		case "marriott": name = "David Marriott"; break;
		case "mccray": name = "Emanuel McCray"; break;

		}

		switch(question){

			case 1: issue = "crime"; break;
			case 2: issue = "Freddie Gray"; break;
			case 3: issue = "drug addiction"; break;
			case 4: issue = "education"; break;
			case 5: issue = "economic development"; break;
			case 6: issue = "environment"; break;
			case 7: issue = "transportation"; break;
			case 8: issue = "housing"; break;
			case 9: issue = "taxes"; break;
			case 10: issue = "neighborhood revitalization"; break;
			case 11: issue = "Mayor Stephanie Rawlings-Blake’s legacy"; break;
			case 12: issue = "reason for running for office"; break;

		}

		var text = "Baltimore mayoral candidate "+name+" on "+issue+":";
		var link = "http://data.baltimoresun.com/voter-guide-2016/mayor/"+candidate+".html%23"+question;
		return [text, link];

	},


share_answer_senate: function(){

		$(".answer-social .icon-twitter").click(function(){

			var qnum = $(this).parent().data("num");
			var current_candidate = shown_answers["q"+qnum]

			var share_text = app.generate_share_text_senate(current_candidate, qnum);

			var twitter_url = "https://twitter.com/intent/tweet?text="+share_text[0]+"&url="+share_text[1]+"&tw_p=tweetbutton";
			window.open(twitter_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;


		});

		$(".answer-social .icon-facebook").click(function(){

			var qnum = $(this).parent().data("num");
			var current_candidate = shown_answers["q"+qnum]

			var share_text = app.generate_share_text_senate(current_candidate, qnum);

			var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link="+share_text[1]+"&picture=http://data.baltimoresun.com/voter-guide/images/candidates/"+current_candidate+".jpg&name=Baltimore Sun Voter Guide Q%26A&description="+share_text[0]+"&redirect_uri=http://data.baltimoresun.com/voter-guide";
			window.open(facebook_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;


		});		


	},

	generate_share_text_senate: function(candidate, question){

		var name;
		var issue;

		switch(candidate){

			case "dickson": name = "Freddie Donald Dickson Jr."; break;
			case "edwards": name = "Donna F. Edwards"; break;
			case "jaffe": name = "Ralph Jaffe"; break;
			case "scaldaferri": name = "Theresa C. Scaldaferri"; break;
			case "staley": name = "Violet Staley"; break;
			case "taylor": name = "Blaine Taylor"; break;
			case "tinus": name = "Ed Tinus"; break;
			case "vanhollen": name = "Chris Van Hollen"; break;
			case "young": name = "Lih Young"; break;
			case "chaffee": name = "Chris Chaffee"; break;
			case "connor": name = "Sean P. Connor"; break;
			case "douglas": name = "Richard J. Douglas"; break;
			case "graziani": name = "John R. Graziani"; break;
			case "holmes": name = "Greg Holmes"; break;
			case "hooe": name = "Joseph D. \"Joe\" Hooe"; break;
			case "kefalas": name = "Chrys Kefalas"; break;
			case "mcnicholas": name = "Mark McNicholas"; break;
			case "richardson": name = "Lynn Richardson"; break;
			case "seda": name = "Anthony Seda"; break;
			case "shawver": name = "Richard Shawver"; break;
			case "szeliga": name = "Kathy Szeliga"; break;
			case "wallace": name = "Dave Wallace"; break;
			case "yarrington": name = "Garry Thomas Yarrington"; break;
			case "flowers": name = "Margaret Flowers"; break;

		}

		switch(question){

			case 1: issue = "Iran"; break;
			case 2: issue = "ISIS"; break;
			case 3: issue = "trade"; break;
			case 4: issue = "Obamacare"; break;
			case 5: issue = "financial regulation"; break;
			case 6: issue = "Obama's legacy"; break;
			case 7: issue = "workforce issues"; break;
			case 8: issue = "gun control"; break;
			case 9: issue = "redistricting"; break;
			case 10: issue = "Baltimore"; break;
			case 11: issue = "reason for running for office"; break;

		}

		var text = "U.S. Senate candidate "+name+" on "+issue+":";
		var link = "http://data.baltimoresun.com/voter-guide-2016/senate/senate.html?cand="+candidate+"%26%23"+ "question-" + question;
		return [text, link];

	},


	toggle_fixed_nav: function(){

		//Establish at what vertical spot we want the nav to be revealed

		//We will add to where the inline-nav begins. We don't want that
		//to be visible and we want some cushion before the other drops down

		var reveal_point = $("#inline-nav").offset().top + 120;
		
		$(document).scroll(function(){

			var current_position = $(this).scrollTop();
			
			if (current_position >= reveal_point){
				$("nav").addClass("revealed");
			} else {
				$("nav").removeClass("revealed");
			}

		});

		//Add click/scroll functionality to the nav buttons
		$(".nav-item").click(function(){
			var section = $(this).data("section");
			var position = $("#"+section).offset().top;
			$.scrollTo(position-100, 800);
	

		});

	},

	
	mobile_nav: function(){

		$("#mobile-nav").click(function(){

			if (!$(this).hasClass("clicked")){

				$("#mobile-nav-drop").show();
				$(this).addClass("clicked");

			} else {

				$("#mobile-nav-drop").hide();
				$(this).removeClass("clicked");

			}

		});

	},

	bill_reference_nav: function(){

		$("#bill-nav ul li").click(function(){

			//Grab the year clicked
			var year = $(this).html();
			if (year === "Feedback")
				year = "feedback"

			//Jump to that year
			$.scrollTo($("#year-"+year),0);


		});

	}

}


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}




$(document).ready(function(){

	//share();

	app.init();

});
