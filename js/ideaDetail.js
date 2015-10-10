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
			alert(tag + ", time in millisec: " + timeForFirstAction);
	    }
	});