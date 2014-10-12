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

function ready() {
    addMockItems(10);
}


var templates = ['item', 'displayAddress', 'displayContact', 'controls'];
async.each(templates, getTemplate, function () {
    getPhotos()
})

function jsonFlickrApi(data) {
    mock.images = data.photos.photo;
    console.log('added items', data);
    ready();
}
function getPhotos() {
    $.ajax("https://api.flickr.com/services/rest/", {
        jsonpCallback: "jsonFlickrApi",
        data: {method: "flickr.photos.search", api_key: "14d39dccbd7a5ec415c400e9ec79c738", tags: "forsale", format: "json", api_sig: "d316241d31b4c51a27c08d29bfdf8f9b"}
    }).done(function (data) {
        console.log("dd");
    }).error(function (a, b, c) {
        console.log(a, b, c);
    })
};


$(function () {

    //Connect the two lists
    $("#requests, #routes").sortable({
        connectWith: ".connectedSortable"
    })

    //Events for the routes list

    /**
     * Receive a new element:
     * - Place a permanent marker on the map
     * - Save the new sort order on the database?
     */
    $("#routes").on( "sortreceive", function( event, ui ) {
        ui.item.trigger('routeQueue');
    });

    $("#requests").on( "sortreceive", function( event, ui ) {
        ui.item.trigger('requestQueue');
    });
});


function setToRoute(e){
    var item = $(this);
    item.data('marker').setMap(map);
}

function setToRequest(e){
    var item = $(this);
    item.data('marker').setMap(null);
}


//Gobals!!! Ick!!!


var map;


var infowindow;

function initializeMap() {
    var mapOptions = {
        center: { lat: 37.797, lng: -122.444},
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP

    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);


    infowindow = new google.maps.InfoWindow();

}

//
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

    var full = address.addr1 + " " + address.addr2 + " " + address.city + " " + address.state + ", " + address.zip;

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

        item.data({marker:prmMarker,infoWindow:infowindow});


    });

}

google.maps.event.addDomListener(window, 'load', initializeMap);