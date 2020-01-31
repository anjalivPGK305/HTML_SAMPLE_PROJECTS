//NOTE: If you run this file locally
//You will not get a server status
//You can comment out lines 9 and 26 to make it work locally
function details(){
var xhr = new XMLHttpRequest();  //Create XMLHttpRequset object  1

xhr.onload = function(){  //when ready state changes
    //The following conditional check will not work locally- only on a server
    //if(xhr.status === 200){     //if server status was ok
        responseObject = JSON.parse(xhr.responseText);//4
            var n=document.getElementById('num').value;
            n=parseInt(n);
            
        
        //BUILD UP STRING WITH NEW CONTENT (could alse useDOM manipulation)
        var newContent = '';//5
        for(var i=0;i<responseObject.events.length;i++){//Loop through object    6
            if(n == responseObject.events[i].id)
            {
            newContent += '<div class="event">';
            newContent += '<p><b>' + responseObject.events[i].firstname+'</b> ';
            newContent += '<b>' + responseObject.events[i].lastname+'</b><br>';
            newContent += '<b>' + responseObject.events[i].dateofbirth+'</b><br>';
            newContent += '<b>' + responseObject.events[i].age+'</b><br>';
            newContent += '<b>' + responseObject.events[i].place+'</b><br></p>';
            newContent += '</div>';
            }
        }
        //Update the page with the new content
        document.getElementById('content').innerHTML = newContent; //7

        //}
};


xhr.open('GET', 'data.json',true);  // Prepare the request   2
xhr.send(null);                 // Send the request      3
}
function reset(id1){
    document.getElementById(id1).innerHTML="";
    
}