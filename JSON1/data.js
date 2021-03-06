//NOTE: If you run this file locally
//You will not get a server status
//You can comment out lines 9 and 26 to make it work locally

var xhr = new XMLHttpRequest();  //Create XMLHttpRequset object  1

xhr.onload = function(){  //when ready state changes
    //The following conditional check will not work locally- only on a server
    //if(xhr.status === 200){     //if server status was ok
        responseObject = JSON.parse(xhr.responseText);//4

        //BUILD UP STRING WITH NEW CONTENT (could alse useDOM manipulation)
        var newContent = '';//5
        for(var i=0;i<responseObject.events.length;i++){//Loop through object    6
            newContent += '<div class="event">';
            newContent += '<img src="' + responseObject.events[i].map+'"';
            newContent += 'alt="'+ responseObject.events[i].location+'"/>';
            newContent += '<p><b>' + responseObject.events[i].location+'</b><br>';
            newContent += responseObject.events[i].date+'</p>';
            newContent += '</div>';

        }
        //Update the page with the new content
        document.getElementById('content').innerHTML = newContent; //7

        //}
};

xhr.open('GET', 'data.json',true);  // Prepare the request   2
xhr.send(null);                 // Send the request      3