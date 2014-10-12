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
    console.log('ready');

    getItems(function (item) {


        for (var i in item) {
            var f = item[i];
            var mockItem = getFurniture();
            f.item[0].itemTitle = mockItem.itemTitle;
            f.item[0].images = mockItem.images;
            console.log(f);
            dust.render("item", f, function (origin) {
                var address = origin.User;
                origin.address=address;
                return function (err, text) {
                    var newItem = $(text);
                    newItem.data('originData', origin);
                    newItem.on('routeQueue', setToRoute);
                    newItem.on('requestQueue', setToRequest);
                    newItem.on('changeQueue', calcRoute);
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

                    geoCode(newItem, address)
                }
            }(f));
        }
    });
}

function getItems(callback) {

    //var data = {"queryStatus":1,"donations":[{"item":[{"itemTypeID":"0","itemType":"toaster","itemCount":"1","description":"bad toastes"}],"User":{"fName":"{","lName":"{","email":"{","address":"{","city":"{","state":"{","zip":"{","phone":"{"},"pickUpDates":["13-10-2014"],"imageURL":[],"donationStatus":"0","donationCreationDate":"2014-10-12 10:54:05","donationID":{"fName":"{","lName":"{","email":"{","address":"{","city":"{","state":"{","zip":"{","phone":"{","status":"0","donationID":"1","dateEntered":"2014-10-12 10:54:05"}},{"item":[{"itemTypeID":"0","itemType":"toaster","itemCount":"1","description":"bad toastes"}],"User":{"fName":"Lenny","lName":"Markus","email":"lmarkus@paypal.com","address":"20 descanso dr #1165","city":"San Jose","state":"CA","zip":"95134","phone":"9543589682"},"pickUpDates":["13-10-2014"],"imageURL":[],"donationStatus":"0","donationCreationDate":"2014-10-12 10:59:32","donationID":{"fName":"Lenny","lName":"Markus","email":"lmarkus@paypal.com","address":"20 descanso dr #1165","city":"San Jose","state":"CA","zip":"95134","phone":"9543589682","status":"0","donationID":"2","dateEntered":"2014-10-12 10:59:32"}},{"item":[{"itemTypeID":"0","itemType":"toaster","itemCount":"1","description":"bad copper"}],"User":{"fName":"Jennifer","lName":"Long","email":"pennyLong@yahoo.com","address":"370 W Caribbean Dr","city":"Sunnyvale","state":"CA","zip":"94089","phone":"9543589682"},"pickUpDates":["14-10-2014"],"imageURL":[],"donationStatus":"0","donationCreationDate":"2014-10-12 11:30:50","donationID":{"fName":"Jennifer","lName":"Long","email":"pennyLong@yahoo.com","address":"370 W Caribbean Dr","city":"Sunnyvale","state":"CA","zip":"94089","phone":"9543589682","status":"0","donationID":"3","dateEntered":"2014-10-12 11:30:50"}},{"item":[{"itemTypeID":"0","itemType":"toaster","itemCount":"1","description":"Our stylish and beloved black couch - three big fluffy cushions, arm rests. 6 1\/2 by 4 by 4 feet."}],"User":{"fName":"Patricia","lName":"Thomas","email":"pat.thomas@comcast.net","address":"712A Cole St","city":"San Francisco","state":"CA","zip":"94117","phone":"408-227-1241"},"pickUpDates":["14-10-2014"],"imageURL":["img\/paypal.png"],"donationStatus":"0","donationCreationDate":"2014-10-12 11:31:10","donationID":{"fName":"Patricia","lName":"Thomas","email":"pat.thomas@comcast.net","address":"712A Cole St","city":"San Francisco","state":"CA","zip":"94117","phone":"408-227-1241","status":"0","donationID":"4","dateEntered":"2014-10-12 11:31:10"}},{"item":[{"itemTypeID":"0","itemType":"toaster","itemCount":"1","description":"Has six drawers in the middle, a spacious surface, and large mirror"}],"User":{"fName":"Abishek","lName":"Bhatt","email":"abbhatt@gmail.com","address":"320 Monticello Street","city":"San Francisco","state":"CA","zip":"94132","phone":"408-267-3298"},"pickUpDates":["16-10-2014"],"imageURL":["img\/paypal.png"],"donationStatus":"0","donationCreationDate":"2014-10-12 11:36:44","donationID":{"fName":"Abishek","lName":"Bhatt","email":"abbhatt@gmail.com","address":"320 Monticello Street","city":"San Francisco","state":"CA","zip":"94132","phone":"408-267-3298","status":"0","donationID":"5","dateEntered":"2014-10-12 11:36:44"}},{"item":[{"itemTypeID":"0","itemType":"toaster","itemCount":"1","description":"Light colored wooden desk, with three large drawers on the side. High quality, heavy desk - not IKEA quality."}],"User":{"fName":"Ciarlotta","lName":"Caggiano","email":"caggi@gmail.com","address":"1087 De Haro St","city":"San Francisco","state":"CA","zip":"94107","phone":"408-207-3221"},"pickUpDates":["22-10-2014"],"imageURL":["img\/paypal.png"],"donationStatus":"0","donationCreationDate":"2014-10-12 11:39:40","donationID":{"fName":"Ciarlotta","lName":"Caggiano","email":"caggi@gmail.com","address":"1087 De Haro St","city":"San Francisco","state":"CA","zip":"94107","phone":"408-207-3221","status":"0","donationID":"6","dateEntered":"2014-10-12 11:39:40"}}]}
    $.post("/donationQuery.php",{},function(data) {
        data = JSON.parse(data);
        callback(data.donations);
    });
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
            console.log(a,b,c);
        })
};


/**
 * Load and compile the templates for various parts of the site
 * @type {string[]}
 */
var templates = ['item', 'displayAddress', 'displayContact', 'controls'];
async.each(templates, getTemplate, function () {
    //Once the templates are loaded, go fetch some photos.
    getFlickerPhotos()
})


/**
 * DOM setup
 */

$(function () {

    //Initialize datepicker
    $("#datepicker").datepicker();
    //Connect the two queues so that elements can be dragged between eachother, and sorted
    $("#requests, #routes").sortable({
        connectWith: ".connectedSortable"
    })

    //Events for the routes list

    /**
     * Receive a new element:
     * - Place a permanent marker on the map
     * - Save the new sort order on the database?
     */
    $("#routes").on("sortreceive", function (event, ui) {
        ui.item.trigger('routeQueue').trigger('changeQueue');
    });

    $("#requests").on("sortreceive", function (event, ui) {
        ui.item.trigger('requestQueue').trigger('changeQueue');
    });

    $("#routes").on("sortupdate", function (event, ui) {
        calcRoute();
    });

    //Save routes
    $(".saveRoute").click(function(){
        calcRoute();
        if(!confirm("This will save the current route. Do you want to continue?")){return;}

        var date = $("#datepicker").val();
        var route = $("#routes li").map(function(idx,item){
            $(item).data('marker').setMap(null);
            return item.id
        });
        var ret = {scheduleDate:date,donationID:route};
        $.post("/routeCreate.php",ret,function(data){
            console.log('route creation', data)
            $("#routes").empty();
        });

    });
});


/**
 * Actions for the list item controls
 */

function setToRoute(e) {
    var item = $(this);
    item.data('marker').setMap(map);
}

function setToRequest(e) {
    var item = $(this);
    item.data('marker').setMap(null);
}

function setToReject(e) {
    var item = $(this);
    item.data('marker').setMap(null);
    status.setDonationStatus(item.attr('id'),status.REJECTED);

}


//Globals!!! Ick!!!


var map;


var infowindow;

var directionsService = new google.maps.DirectionsService();
var directionsDisplay = new google.maps.DirectionsRenderer();


function initializeMap() {
    var mapOptions = {
        center: { lat: 37.797, lng: -122.444},
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP

    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    directionsDisplay.setMap(map);
    infowindow = new google.maps.InfoWindow();
}


/**
 * Actions for the routing controls
 */

$('.calcRoutes').click(calcRoute);

/**
 * Calculate the best route between the points in the routeQueue
 */
function calcRoute() {
    //Hardcoded the Goodwill HQ as the start and end location for all routes
    var start = "1580 Mission Street, San Francisco, CA 94103";
    var end = start;//"20 Descanso Dr, San Jose CA 95134";//start;

    var items = $('#routes .item');
    var wayPoints = items.map(function (idx, item) {
        var data = $(item).data('originData').address;
        $(item).data('marker').setMap(null);

        return {
            location: data.address + " "/* + data.addr2 */+ " , " + data.city + " , " + data.zip,
            stopover: true
        }


    });

    var optimize = $("#optimize").is(":checked");

    var request = {
        origin: start,
        destination: end,
        waypoints: wayPoints,
        optimizeWaypoints: optimize,
        travelMode: google.maps.TravelMode.DRIVING
    };

    //
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {

            //Render the solution on the map
            directionsDisplay.setDirections(result);

            //Tally up the total time / distance for this route
            var totals = computeTotalDistance(result);
            $("#routeSpecs").text(" " + wayPoints.length + " stops, " + totals.distance + " miles, " + totals.time + " hours");

            //Rejjiger the list if set to optimize route
            if (optimize) {
                var optimizedWaypoints = result.routes[0].waypoint_order;
                var oldItems = $("#routes li");
                var newRoute = [];
                for (var i in optimizedWaypoints) {
                    newRoute.push(oldItems[optimizedWaypoints[i]]);
                }
                $("#routes").append(newRoute);
            }
        }
    });
}

/**
 * Go through the results and add up the distance/duration of each leg
 * @param result
 * @returns {{distance: string, time: string}}
 */
function computeTotalDistance(result) {
    var totalDistance = 0;
    var totalTime = 0;
    var myroute = result.routes[0];
    for (i = 0; i < myroute.legs.length; i++) {
        totalDistance += myroute.legs[i].distance.value;
        totalTime += myroute.legs[i].duration.value;
    }
    var METERS_TO_MILES = 0.000621371192;
    return {
        distance: (totalDistance * METERS_TO_MILES).toFixed(2),
        time: (totalTime / 3600).toFixed(2)
    }
}

/**
 * Translate a customers address into a map point.
 * This will create two sets of markers:
 * A blue temp marker for hover events
 * A red permanent marker for placemente on the pickup list
 *
 * @param item
 * @param address
 */
function geoCode(item, address) {

    var full = address.address + " " +/* address.addr2 + " " +*/ address.city + " " + address.state + ", " + address.zip;
    console.log('full ',full);
    var geo = new google.maps.Geocoder();

    geo.geocode({'address': full }, function (results, status) {
        var map_center_lat = results[0].geometry.location.lat();
        var map_center_lng = results[0].geometry.location.lng();

        var tmpMarker = new google.maps.Marker({
            position: new google.maps.LatLng(map_center_lat, map_center_lng),
            icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        });
        var prmMarker = new google.maps.Marker({
            position: new google.maps.LatLng(map_center_lat, map_center_lng),
            icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
        });

        google.maps.event.addListener(prmMarker, 'click', (function (add, marker) {
            return function () {
                console.log("in click listener ", add);
                infowindow.setContent(add);
                infowindow.open(map, marker);
            }
        })(full, prmMarker));


        item.hover(
            //On enter
            function (add, marker) {
                return function () {
                    marker.setMap(map);
                    infowindow.setContent(add);
                    infowindow.open(map, marker);
                }
            }(full, tmpMarker),

            //On leave
            function (add, marker) {
                return function () {
                    marker.setMap(null);
                }
            }(full, tmpMarker)
        );

        item.data({marker: prmMarker, infoWindow: infowindow});


    });

}

google.maps.event.addDomListener(window, 'load', initializeMap);