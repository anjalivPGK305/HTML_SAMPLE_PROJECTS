var counter=0;
function addUser(){
    var inputdata2= document.getElementById('date').value;
    var inputdata= document.getElementById('fname').value;
    var inputdata1= document.getElementById('name1').value;

    var html= '<div class="row" id="data'+counter+'" style="margin-bottom:15px;">'+
    '<div class="col-md-2 col-sm-6 col-xs-5">'+
      '<input type="text" class="form-control" value="'+inputdata+'" disabled>'+
    '</div>'+
    '<div class="col-md-2 col-sm-6 col-xs-5">' +
    '<input type="text" class="form-control" value="' + inputdata2 + '" disabled>' +
    '</div>' +
    '<div class="col-md-2 col-sm-6 col-xs-5">' +
    '<input type="text" class="form-control" value="' + inputdata1 + '" disabled>' +
    '</div>' +
    '<div class="col-md-2 col-sm-4 col-xs-4">'+
      '<button type="button" class="btn btn-success" onclick="edit(this.id)" id="edit'+counter+'">Edit</button>'+
    '</div>'+
        
    '<div class="col-md-2 col-sm-4 col-xs-4">'+
      '<button type="button" class="btn btn-success" onclick="update(this.id)" id="update'+counter+'">Update</button>'+
    '</div>'+
    '<div class="col-md-2 col-sm-4 col-xs-4">'+
      '<button type="button" class="btn btn-danger" onclick="remove(this.id)" id="delete'+counter+'">Delete</button>'+
    '</div>'+
  '</div>';

  document.getElementById('userlist').insertAdjacentHTML('beforeend',html);
  counter++;
}
function checkEmptyInput(){
    var isEmpty = false,
    fname= document.getElementById("fname").value;
    lname= document.getElementById("lname").value;
    city= document.getElementById("city").value;
    state=document.getElementById("state").value;
    Qualification=document.getElementById("Qualification").value;
    date=document.getElementById("date").value;
    name=document.getElementById("name").value;
    name1=document.getElementById("name1").value;

    if(fname===""){
        alert("First Name Cannot Be Empty");
        isEmpty=true;
    }
    else if(lname===""){
        alert("Last Name Cannot Be Empty");
        isEmpty =true;
    }
    else if(city===""){
        alert("City cannot be Empty");
        isEmpty = true;
    }
    else if(state===""){
        alert("State cannot be Empty");
        isEmpty = true;
    }
    else if(Qualification===""){
        alert("Qualification cannot be Empty");
        isEmpty = true;
    }
    else if(date===""){
        alert("Date cannot be empty");
        isEmpty = true;
    }
    else if(name===""){
        alert("Username cannot be empty");
        isEmpty = true;
    }
    else if(name1===""){
        alert("Email cannot be empty");
        isEmpty = true;
    }   
    return isEmpty;

}
function edit(editId){
    if(!checkEmptyInput()){
  var parent =  document.getElementById(editId).parentNode.parentNode;
        var child = parent.firstChild.firstChild;
        child.removeAttribute('disabled');
        console.log(child);
    }
      }
      
function update(updateId){
    if(!checkEmptyInput()){
  var parent =   document.getElementById(updateId).parentNode.parentNode;
        var child = parent.firstChild.firstChild;
        child.setAttribute("disabled",'disabled');
        console.log(child);
    }
      }
      
function remove(deleteId){
    if(!checkEmptyInput()){
  var parent =   document.getElementById(deleteId).parentNode.parentNode;
        parent.remove();
        console.log(parent);
    }
      }
