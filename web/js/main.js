/**
 * Created by lmarkus on 10/11/14.
 */

//Compile templates
function getTemplate(name,next){

    $.get("templates/"+name+".dust",function(data){
        dust.compileFn(data,name);
        next();
    });

};

function ready(){
    addMockItems(10);
}


var templates=['item','displayAddress','displayContact'];
async.each(templates,getTemplate,function(){
    getPhotos()
})

function jsonFlickrApi(data){
    mock.images = data.items;
    console.log('added items',data);
    ready();
}
function getPhotos(){
    $.ajax("https://api.flickr.com/services/rest/",{
        jsonpCallback:"jsonFlickrApi",
        data:{method:"flickr.photos.search",api_key:"14d39dccbd7a5ec415c400e9ec79c738",tags:"forsale",format:"json",api_sig:"d316241d31b4c51a27c08d29bfdf8f9b"}
    }).done(function(data){
        console.log("dd");
    }).error(function(a,b,c){
        console.log(a,b,c);
    })
};


$(function() {
    $( "#requests, #routes" ).sortable({
        connectWith: ".connectedSortable"
    }).disableSelection();
});