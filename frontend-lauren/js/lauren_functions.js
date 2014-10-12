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
    "User":
    {
            "email":"email@gmail.com"
    },
    "pickUpDates":["1/1/1111"],
    "imageURL":["img/username/filepath1","img/username/filepath2"]
    "donationStatus":1
}*/
function getAllData() {
    var date = getCalJSON()
    var itemJSON = "";
    var email = getVal('email');
    var descr = getVal('itemDescr1');
    var photosArray = getPhotos()

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
    var jsonString = JSON.stringify({"item":[{"itemTypeID":0,"count":1,"description":descr}],"User":{"email":email},"pickUpDates":[date],"imageURL":photosArray,"donationStatus":1})
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

function fileUpload() {
    'use strict';
    // Change this to the location of your server-side upload handler:
    var url = window.location.hostname === 'blueimp.github.io' ?
                '//jquery-file-upload.appspot.com/' : 'server/php/',
        uploadButton = $('<button/>')
            .addClass('btn btn-primary')
            .prop('disabled', true)
            .text('Processing...')
            .on('click', function () {
                var $this = $(this),
                    data = $this.data();
                $this
                    .off('click')
                    .text('Abort')
                    .on('click', function () {
                        $this.remove();
                        data.abort();
                    });
                data.submit().always(function () {
                    $this.remove();
                });
            });
    $('#fileupload').fileupload({
        url: url,
        dataType: 'json',
        autoUpload: false,
        acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
        maxFileSize: 5000000, // 5 MB
        // Enable image resizing, except for Android and Opera,
        // which actually support image resizing, but fail to
        // send Blob objects via XHR requests:
        disableImageResize: /Android(?!.*Chrome)|Opera/
            .test(window.navigator.userAgent),
        previewMaxWidth: 100,
        previewMaxHeight: 100,
        previewCrop: true
    }).on('fileuploadadd', function (e, data) {
        data.context = $('<div/>').appendTo('#files');
        $.each(data.files, function (index, file) {
            var node = $('<p/>')
                    .append($('<span/>').text(file.name));
            if (!index) {
                node
                    .append('<br>')
                    .append(uploadButton.clone(true).data(data));
            }
            node.appendTo(data.context);
        });
    }).on('fileuploadprocessalways', function (e, data) {
        var index = data.index,
            file = data.files[index],
            node = $(data.context.children()[index]);
        if (file.preview) {
            node
                .prepend('<br>')
                .prepend(file.preview);
        }
        if (file.error) {
            node
                .append('<br>')
                .append($('<span class="text-danger"/>').text(file.error));
        }
        if (index + 1 === data.files.length) {
            data.context.find('button')
                .text('Upload')
                .prop('disabled', !!data.files.error);
        }
    }).on('fileuploadprogressall', function (e, data) {
        var progress = parseInt(data.loaded / data.total * 100, 10);
        $('#progress .progress-bar').css(
            'width',
            progress + '%'
        );
    }).on('fileuploaddone', function (e, data) {
        $.each(data.result.files, function (index, file) {
            if (file.url) {
                var link = $('<a>')
                    .attr('target', '_blank')
                    .prop('href', file.url);
                $(data.context.children()[index])
                    .wrap(link);
            } else if (file.error) {
                var error = $('<span class="text-danger"/>').text(file.error);
                $(data.context.children()[index])
                    .append('<br>')
                    .append(error);
            }
        });
    }).on('fileuploadfail', function (e, data) {
        $.each(data.files, function (index) {
            var error = $('<span class="text-danger"/>').text('File upload failed.');
            $(data.context.children()[index])
                .append('<br>')
                .append(error);
        });
    }).prop('disabled', !$.support.fileInput)
        .parent().addClass($.support.fileInput ? undefined : 'disabled');



}