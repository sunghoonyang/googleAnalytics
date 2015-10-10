/***
*
*	analytics.js
*
*/
//tracking code changes for marketing site and app
<script>
 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
 ga('create', 'UA-64727557-1' , 'auto');  
 ga('send', 'pageview');
</script>

/***
*
*	buzz signup
*	I don't know where to write a function that takes in fewer params and call inside ga();
*
*/

'ga-signup-1' : function (container) {
	container.find('[class^=log-btn-]').on('click', function () {
		ga('send', 'event', 'Buzz sign up', 'click', 'Stage 1 | signupMethod : ' + this.find('a').attr('data-social-auth-provider'););
		return;
	});
	container.find('#signup-form button').on('click', function () {
		ga('send', 'event', 'Buzz sign up', 'click', 'Stage 1 | signupMethod : email');
		return;
	});
},

'ga-signup-2' : function (container) {
	container.find('button.btn-primary').on('click', function () {
		ga('send', 'event', 'Buzz sign up', 'click', 'Stage 2 | Cleared!');
		return;
	});
},

'ga-signup-3' : function (container) {
	container.find('button.continue').on('click', function () {
		ga('send', 'event', 'Buzz sign up', 'click', 'Stage 3 | Cleared!');
	 	return;
	});
},

/***
*
*	landing page - ideascale
*
*/
//front-end moderation ul's - tracking the used functions
'ga-landing-page-moderation' : function (container) {
	//@Jing : I will change this once I am clear how outermost DOM element is determined
	//or we can append some ids? - i want to keep original code as intact as possible 
    $(".moderation-menu > ul > li > a").on('click', function () {
        var communityName = $('li.admin').text();
        communityName = communityName.replace(/\s/g, "");
        var action_title = $(this).attr('title');
        ga('send', 'event', 'Front end moderation actions', communityName + ", " + action_title);
    });
},
//   Tab Usage
'ga-tab-usage' : function (container) {
    $('#tab-recent > a, #tab-author > a, #tab-random > a, #tab-hot > a, #tab-popular > a').click(function () {
        var communityName = $('li.admin').text();
        communityName = communityName.replace(/\s/g, "");
        var tabName = $(this).attr('title');
        ga('send', 'event', 'Tab usage', 'click', communityName + ', ' + tabName);
    });  
},

/***
*
*	idea detail page - ideascale
*
*/
'ga-idea-detail' : function (container) {
	var d = new Date();
		startTime = d.getTime();
	$(document).click(function () {
		var endTime = new Date().getTime();
	   		timeForFirstAction = endTime - startTime;
			tag = "";
	    //campaign
		if ($(event.target).parent().hasClass("idea-campaign")) {
			tag = "campaign";
		}
		//submit
		else if ($(event.target).val() == "Submit Comment") {
			tag = "submit-comment";
		}
		//idea-details-tab
		else if ($(event.target).attr('href') == "#idea-tab-details") {
			tag = "idea-details-tab";
		}
		//Up|down vote, prev|next idea, breadcrumbs
		else if ($(event.target).text() != -1) {
			switch ($(event.target).text().replace(/\s/g, "")) {
				//up vote
				case "Youagreed":
					tag = "up-vote";break;
				//down vote
				case "Idisagree":
					tag = "down-vote";break;
				case "PreviousIdea":
					tag = "prev-idea";break;
				case "NextIdea":
					tag = "next-idea";break;
	            case "[e-mail]":
					tag = "action-email";break;
				case "[Follow]":
					tag = "action-follow";break;
				case "[Comment]":
					tag = "action-comment";break;
				case "[Edit]":
					tag = "action-edit";break;
	            case "[BanMember]":
	                tag = "action-ban-member";break;
	            case "Google+":
	            	tag = "share-google+";break;
	            case "Twitter":
	            	tag = "share-twitter";break;
	            case "Facebook":
	            	tag = "share-facebook";break;
	            case "Email":
	            	tag = "share-email";break;
			}
		}
	    //send the tag with the action time
	    if (tag.length != "") {
			ga('send', 'event', 'Idea detail tracking', 'click', tag + ", time in millisec: " + timeForFirstAction);
	    }
	});
},

