var itemCounter = 1;
function addItem() {
	//alert("I work!!");
	itemCounter++;
	var newItem = '<div class="box box-solid" id="newItem'+itemCounter+'">'+
        '<div class="box-header">'+
                                        '<h3 class="box-title">Item '+itemCounter+'</h3> '+
                                    '</div> '+
                                    '<div class="box-body"> '+
                                        '<div class="form-group"> '+
                                            '<label >Short Item Title</label> '+
                                            '<input class="form-control input-sm" id="itemTitle'+itemCounter+'" type="text" placeholder="e.g. Black Leather Couch"> '+
                                        '</div> '+
                                        '<div class="form-group"> '+
                                            '<label>Item Description</label> '+
                                            '<textarea class="form-control input-sm" id="itemDescr'+itemCounter+'" rows="3" placeholder="Very comfy black leather couch, few tears, no stains, measures approximately..."></textarea> '+
                                        '</div> '+
                                        '<div class="form-group"> '+
                                            '<label for="exampleInputFile">Add Photos</label> '+
                                            '<input type="file" id="exampleInputFile"> '+
                                        '</div> '+
                                    '</div><!-- /.box-body --> '+
                                    '<div class="box-footer"> '+
                                    '<button type="button" onClick="removeItem('+itemCounter+')" class="btn btn-sm btn-danger">Remove</button> '+
                                    '</div><!-- /.box-footer--> '+
                                '</div>';
   // newItem = "<div>Hello!!!! \
   // </div>";
	document.getElementById('itemsColumn').innerHTML += newItem;
}

function removeItem(divId) {
   // alert("Are you sure you want to remove this section?");
    var element = document.getElementById("newItem"+divId);
    element.parentNode.removeChild(element);
    itemCounter--;

}
function getVal(id){
    return document.getElementById(id).value;
}
/*
 * Eventually, this will return a JSON object that contains all the dates and time frames input by the user.
 * For now, though, it just returns the last date chosen.
*/
function getCalJSON() {
    var data = $("#calendar").fullCalendar( 'clientEvents');
    var i = 0;
    var endJSON;
    while (data[i]) {
        //console.log(data[i])
        if (data[i].title === 'Pickup Unavailable') {
            i++;
            continue;
        }
        var startDate = String(data[i].start._d)
        var res = startDate.split(" ");
        var month = getMonth(res[1])
        var day = parseInt(res[2])+1   // Incr date because it's one behind for some reason
       // console.log(startDate)
        //console.log("Month: "+month)
        //console.log(data[i].title)
        //var jsonString = JSON.stringify({'start':data[i].start._d, 'end':data[i].end._d,'timeFrame': data[i].title});
        //console.log(jsonString)

        endJSON = month+"/"+day+"/"+res[3]

        i++;
    }

    return endJSON;
}

/*JSON Format
 * {
    "item":[
    {
            "itemTypeID":0,
            "count":1,
            "description":"my description"  
    }],
    "email":"email@gmail.com",
    "pickUpDates":["1/1/1111"],
    "imageURL":["img/username/filepath1","img/username/filepath2"]
    "donationStatus":1
}*/
function getAllData() {
    var date = getCalJSON();
    var itemJSON = "";
    var email = getVal('email');
    var descr = getVal('itemDescr1');
    var photosArray = getPhotos();
    var lastName = getVal('lastName');
    var firstName = getVal('firstName');
    var streetAddress = getVal('streetAddress');
    var city = getVal('city');
    var state = getVal('state');
    var zip = getVal('zip');
    var phoneNumber = getVal('phoneNumber');

    for (var i = 1; i <= itemCounter; i++){
        var id = "itemDescr"+i
        console.log(id)
        var desc = getVal("itemDescr"+i)
        var temp = JSON.stringify({"itemTypeID":0,"count":1,"description":desc})
        itemJSON += temp;
        if (i != itemCounter) {
            itemJSON += ','
        }
    }

    console.log(itemJSON)
    // Form JSON string
    var jsonString = JSON.stringify({"item":[{"itemTypeID":0,"count":1,"description":descr}],
        "email":email,"pickUpDates":[date],"imageURL":photosArray,"donationStatus":0,
        "user":{
            "fName":firstName,
            "lName":lastName,
            "email":email,
            "address":streetAddress,
            "city":city,
            "state":state,
            "zip":zip,
            "phone":phoneNumber}});
    console.log(jsonString)
    $.post("/donationCreate.php",jsonString,function(data){
 
    });
    console.log(jsonString)
}
function getPhotos() {
    var photoDivs = document.getElementsByClassName('working')
    console.log( photoDivs )
    var array = []

    for (var i = 0; i < photoDivs.length; i++){
        array.push("img/"+photoDivs[i].getElementsByTagName('p')[0].innerHTML)
    }

    return array;
}

function getMonth(text) {
    if (text === "Jan") {
        return '1';
    } else if (text === "Feb") {
        return '2';
    } else if (text === "Mar") {
        return '3';
    } else if (text === "Apr") {
        return '4';
    } else if (text === "Sep") {
        return '9';
    } else if (text === "Oct") {
        return '10';
    } else if (text === "Nov") {
        return '11';
    } else if (text === "Dec") {
        return '12';
    }
}

function formatModal(name, email, deny) {
    //alert("hello")
    document.getElementById('email_to').value = email;
    if (deny) {
        document.getElementById('email_title').innerHTML = "Reject Item(s)";
        document.getElementById('email_message').value = "Dear "+name.trim()+",\n\n"+
        "Hello! Thanks for considering donating to Goodwill, but we're afraid your item does not qualify for pickup. We encourage you "+
        "to drop it off at a drop-off center near you.\n\n"+
        "Sincerely, \n"+
        "Goodwill of San Francisco, San Mateo, and Marin counties";
    } else {
        document.getElementById('email_title').innerHTML = "Confirm Pick-Up";
        document.getElementById('email_message').value = "Dear "+name.trim()+",\n\n"+
        "Hello! Thanks for donating to Goodwill! We have received your request and will be picking it up on October 23, 2014.\n\n"+
        "Sincerely, \n"+
        "Goodwill of San Francisco, San Mateo, and Marin counties";
    }
}





