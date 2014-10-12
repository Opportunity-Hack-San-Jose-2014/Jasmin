/**
 * Created by lmarkus on 10/11/14.
 */

//Compile templates
function getTemplate(name, next) {

    $.get("templates/" + name + ".dust", function (data) {
        dust.compileFn(data, name);
        next();
    });

};

/**
 * Init function.  And some globals! Yikes!
 */

function ready() {


    getItems(function (item) {
        for (var i in item) {
            var f = item[i];

            dust.render("driverItem", f, function (origin) {
                var address = origin.address
                f.contact.fName= f.contact.name;
                return function (err, text) {
                    var newItem = $(text);
                    newItem.data('originData', origin);
                    newItem.on('reject', setToReject);

                    newItem.find('button.toRoute').click(function (item) {
                        return function () {
                            item.appendTo("#routes");
                            item.trigger('routeQueue').trigger('changeQueue');

                        }
                    }(newItem));

                    newItem.find('button.toRequest').click(function (item) {
                        return function () {
                            if (!confirm("Are you sure you want to cancel this pickup?")) {
                                return;
                            }
                            item.prependTo("#requests");
                            item.trigger('requestQueue').trigger('changeQueue');
                        }
                    }(newItem));


                    newItem.find('button.toReject').click(function (item) {
                        return function () {

                            if (!confirm("Are you sure you want to reject this donation?")) {
                                return;
                            }

                            item.remove().trigger('reject');
                        }
                    }(newItem));

                    $("#requests").append(newItem);

                }
            }(f));
        }
    });
}

function getItems(callback) {
    callback(addMockItems(10));
}

function setToPickedUp(){
    setStatus($(this).closest('.item'),"Picked Up",status.VERIFIED_PICKED_UP);
}
function setToReject(){
    setStatus($(this).closest('.item'),"Rejected",status.REJECTED);
}
function setToCanceled(){
    setStatus($(this).closest('.item'),"Canceled",status.VERIFIED_NOT_ASSIGNED);
}

function setStatus(item,status,statusCode){

    if(!confirm("Are you sure you want to set this as"+status+"?")){return;}
    var id = item.attr('id');
    status.setDonationStatus(id,statusCode);
    item.remove();
}

/**
 * Load up some mock item photos from the twitter API
 * @param data
 */
function jsonFlickrApi(data) {
    mock.images = data.photos.photo;
    ready();
}
function getFlickerPhotos() {
    $.ajax("https://api.flickr.com/services/rest/", {
        jsonpCallback: "jsonFlickrApi",
        data: {method: "flickr.photos.search", api_key: "9560895d431dc47c33ea213398a64ca3", tags: "furniture", format: "json", api_sig: "33e5bbc3360d412460577e3e4cc03056"}
    }).done(function (data) {
    })
        .error(function (a, b, c) {
        })
};


/**
 * Load and compile the templates for various parts of the site
 * @type {string[]}
 */
var templates = ['driverItem', 'displayAddress', 'displayContact', 'driverControls'];
async.each(templates, getTemplate, function () {
    //Once the templates are loaded, go fetch some photos.
    getFlickerPhotos()
})


/**
 * DOM setup
 */

$(function () {


});

