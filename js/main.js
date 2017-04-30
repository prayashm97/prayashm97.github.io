var map, heatMap;

function myMap() {

    map=new google.maps.Map(document.getElementById("googleMap"),{
        zoom:3,
        center:new google.maps.LatLng(58.648296, -108.173099),
        mapTypeId: 'satellite'

    });


    var poly1First = new google.maps.LatLng(60.47658 ,-144.46691);
    var poly1Second = new google.maps.LatLng(59.05792,-138.11682);
    var poly1Third = new google.maps.LatLng(60.67318,-138.66943);
    var poly1Forth = new google.maps.LatLng(61.43457,-141.12158);

    poly1 = new google.maps.Polygon({
        path: [poly1First, poly1Second, poly1Third,poly1Forth],
        strokeColor: "#FFFFFF",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FFFFFF",
        fillOpacity: 0.4
    });

    var poly2First = new google.maps.LatLng(70.16,-76.81);
    var poly2Second = new google.maps.LatLng(70.93,-73.45);
    var poly2Third = new google.maps.LatLng(69.92,-68.58);
    var poly2Forth = new google.maps.LatLng(68.52,-73.30);
    var poly2Fifth = new google.maps.LatLng(70.16,-76.81);

    poly2 = new google.maps.Polygon({
        path: [poly2First, poly2Second, poly2Third,poly2Forth,poly2Fifth],
        strokeColor: "#FFFFFF",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FFFFFF",
        fillOpacity: 0.4
    });


    var poly3First = new google.maps.LatLng(52.38365 ,-118.59961);
    var poly3Second = new google.maps.LatLng(52.38365 ,-115.92773);

    var poly3Third = new google.maps.LatLng(51.50874,-115.92773);
    var poly3Fourth = new google.maps.LatLng(51.50874,-118.59961);

    poly3 = new google.maps.Polygon({
        path: [poly3First, poly3Second,poly3Third,poly3Fourth],
        strokeColor: "#FFFFFF",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FFFFFF",
        fillOpacity: 0.4
    });

    var poly4First = new google.maps.LatLng(32.91,-1.734863);
    var poly4Second = new google.maps.LatLng(122.395715,-122.888916);
    var poly4Third = new google.maps.LatLng(3.508742,-21.120850);

    poly4 = new google.maps.Polygon({
        path: [poly4First, poly4Second, poly4Third],
        strokeColor: "#FFFFFF",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FFFFFF",
        fillOpacity: 0.4
    });

    var poly5First = new google.maps.LatLng(23.983991,-42.734863);
    var poly5Second = new google.maps.LatLng(12.395715,-12.888916);
    var poly5Third = new google.maps.LatLng(32.508742,-221.120850);

    poly5 = new google.maps.Polygon({
        path: [poly5First, poly5Second, poly5Third],
        strokeColor: "#FFFFFF",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FFFFFF",
        fillOpacity: 0.4
    });


    heatmap = new google.maps.visualization.HeatmapLayer({
          data: getPoints(),
          map: map,
          opacity:0.6,
    });

    heatmap = new google.maps.visualization.HeatmapLayer({
          data: getPoints(),
          map: map
        });

    function getPoints() {
        var returnVal = [];

        $.getJSON( "https://prayashm97.github.io/js/ajax/testfile.json", function( data ) {
          $.each( data, function( key, val ) {
              x = {
                  'location':new google.maps.LatLng(val.Latitude,val.Longitude), 'weight': (((val.CO2)-371)/16)
              }


              returnVal.push(x)
          });
        })
        .error(function(err) { console.error(err)});
        return(returnVal);
    };

}


function polygon5() {
    poly2.setMap(null);
    poly1.setMap(null);
    poly4.setMap(null);
    poly3.setMap(null);

    poly5.setMap(map);

}

function polygon3() {
    poly2.setMap(null);
    poly1.setMap(null);
    poly4.setMap(null);
    poly5.setMap(null);

    poly3.setMap(map);

}
function polygon4() {
    poly2.setMap(null);
    poly1.setMap(null);
    poly3.setMap(null);
    poly5.setMap(null);

    poly4.setMap(map);
}

function polygon2() {
    poly1.setMap(null);
    poly3.setMap(null);
    poly4.setMap(null);
    poly5.setMap(null);

    poly2.setMap(map);

}
function polygon1() {
    poly2.setMap(null);
    poly3.setMap(null);
    poly4.setMap(null);
    poly5.setMap(null);

    poly1.setMap(map);
}

    var des;
    var imglink;
    var glink;


    function aClicked(){

        $("#b").css("background-color", "white");
        $("#c").css("background-color", "white");
        $("#a").css("background-color", "#e6ffff");

        des = "Hubbard Glacier is a glacier located in eastern Alaska and part of Yukon, Canada, and named after Gardiner Hubbard.";
        imglink = "img/a.jpg";
        glink = "graphs/a.PNG";
        giflink = "gifs/a.gif";
        polygon1();


        changebottom(des, imglink, glink, giflink);
    }

    function bClicked ()
    {

        $("#a").css("background-color", "white");
        $("#c").css("background-color", "white");
        $("#b").css("background-color", "#e6ffff");

        des = "The Barnes Ice Cap is an ice cap located in central Baffin Island, Nunavut, Canada. It covers close to 6,000 km2 (2,300 sq mi) in the area of the Baffin Mountains. It has been thinning due to regional warming.";
        imglink = "img/b.jpg";
        glink = "graphs/b.PNG";
        giflink = "gifs/b.gif";

        polygon2();

        changebottom(des, imglink, glink, giflink);
    }

    function cClicked ()
    {

        $("#a").css("background-color", "white");
        $("#b").css("background-color", "white");
        $("#c").css("background-color", "#e6ffff");

        des = "The Athabasca Glacier is one of the six principal 'toes' of the Columbia Icefield, located in the Canadian Rockies. The glacier currently recedes at a rate of about 5 metres (16 ft) per year.";
        imglink = "img/c.jpg";
        glink = "graphs/c.PNG";
        giflink = "gifs/c.gif";

        changebottom(des, imglink, glink, giflink);
    }


function changebottom(des, imglink, glink, giflink){



    $("#des").html(des);
    $("#imglink").attr("src",imglink);
    $("#glink").attr("src",glink);
    $("#giflink").attr("src",giflink);


}
