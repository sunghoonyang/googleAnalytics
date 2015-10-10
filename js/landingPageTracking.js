/***************************************************************************
*
*	Submit button
*	url : http://(communityName).ideascale.com/a/showCreateTopic.do?templateId=0
*
*/
'ga-submission' : function (container) {
    var startTime = new Date().getTime();
    $('button.btn-primary').click(function () {
        var communityName = $('li.admin').text();
            endTime = new Date().getTime();
            timeSpent = endTime - startTime;
        communityName = communityName.replace(/\s/g, "");
        ga('send', 'event', 'Idea submission', 'click', communityName + ', ' + timeSpent + " milliseconds");
    });
},
/***************************************************************************
*
*   Landing page operations
*   url : http://(communityName).ideascale.com/
*
*/
//front-end moderation functionalities
/*
*   current snippet assumes that checking the existence of 
*   moderation ul's is unnecessary, because the attribute is to be 
*   inserted into moderation velocity template. if not, use :
*
*   if ($(selector).length>0) {
*       // Do something
*   }
*
*   above if statement to check for the existence of moderation ul
*   current implementation wants to insert below tag:
*   data-feature="ga-front-end-moderation-tracking" to 
*   <div class="moderation-menu dropdown-menu" role="menu">
*   in html. The insertion is to be made in velocity template
*/
'ga-landing-page-moderation' : function (container) {
    $("ul > li > a").on('click', function () {
        //gets the name of the moderation action
        //  if controller supports other means of collecting communityName,
        //  that would be better practice
        var communityName = $('li.admin').text();
        communityName = communityName.replace(/\s/g, "");
        var action_title = $(this).attr('title');
        ga('send', 'event', 'Front end moderation actions', communityName + ", " + action_title);
    });
},
//   Tab Usage
'ga-tab-usage' : function (container) {
    $('#tab-recent > a, #tab-author > a, #tab-random > a, #tab-hot > a, #tab-popular > a').click(function () {
        //  if controller supports other means of collecting communityName,
        //  that would be better practice
        var communityName = $('li.admin').text();
        communityName = communityName.replace(/\s/g, "");
        var tabName = $(this).attr('title');
        ga('send', 'event', 'Tab usage', 'click', communityName + ', ' + tabName);
    });  
},