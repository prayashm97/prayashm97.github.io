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


    var drownFirst1 = new google.maps.LatLng(36.30129, -121.57471);
    var drownFirst2 = new google.maps.LatLng(37.04148, -120.47607);
    var drownFirst3 = new google.maps.LatLng(38.46596, -120.60791);
    var drownFirst4 = new google.maps.LatLng(39.59246, -121.57471);
    var drownFirst5 = new google.maps.LatLng(39.59246, -123.55225);


    nyc = new google.maps.Polygon({
        path: [drownFirst1, drownFirst2, drownFirst3,drownFirst4],
        strokeColor: "#ffff00",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#ffff00",
        fillOpacity: 0.4
    });

    var drownSecond1 = new google.maps.LatLng(45.74620, -73.04810);
    var drownSecond2 = new google.maps.LatLng(45.90698, -74.02588);
    var drownSecond3 = new google.maps.LatLng(45.26111, -73.43262);

    mtl = new google.maps.Polygon({
        path: [drownSecond1, drownSecond2, drownSecond3],
        strokeColor: "#ffff00",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#ffff00",
        fillOpacity: 0.4
    });

    var drownThird1 = new google.maps.LatLng(30.03871, -90.32959);
    var drownThird2 = new google.maps.LatLng(29.87213, -90.22522);
    var drownThird3 = new google.maps.LatLng(29.71959, -89.90662);
    var drownThird4 = new google.maps.LatLng(30.08150, -89.91211);

    nor = new google.maps.Polygon({
        path: [drownThird1, drownThird2, drownThird3,drownThird4],
        strokeColor: "#ffff00",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#ffff00",
        fillOpacity: 0.4
    });

    var drownForth1 = new google.maps.LatLng(37.80826, -122.52722);
    var drownForth2 = new google.maps.LatLng(37.80826 -122.35968);
    var drownForth3 = new google.maps.LatLng(37.68882 -122.35968);
    var drownForth4 = new google.maps.LatLng(37.68882 -122.52722);

    sanf = new google.maps.Polygon({
        path: [drownForth1, drownForth2, drownForth3,drownForth4],
        strokeColor: "#ffff00",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#ffff00",
        fillOpacity: 0.4
    });

    var drownFifth1 = new google.maps.LatLng(46.74702, -71.45714);
    var drownFifth2 = new google.maps.LatLng(46.90300, -71.43929);
    var drownFifth3 = new google.maps.LatLng(46.89268, -71.16325);
    var drownFifth4 = new google.maps.LatLng(46.74608, -71.25938);

    Qcity = new google.maps.Polygon({
        path: [drownFifth1, drownFifth2, drownFifth3,drownFifth4],
        strokeColor: "#ffff00",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#ffff00",
        fillOpacity: 0.4
    });

    var drownSixth1 = new google.maps.LatLng(26.77312, -80.09033);
    var drownSixth2 = new google.maps.LatLng(26.38503, -80.48584);
    var drownSixth3 = new google.maps.LatLng(25.85729, -80.85388);
    var drownSixth4 = new google.maps.LatLng(25.23779, -80.56824);
    var drownSixth4 = new google.maps.LatLng(25.99068, -80.06287);

    Miami = new google.maps.Polygon({
        path: [drownSixth1, drownSixth2, drownSixth3,drownSixth4],
        strokeColor: "#ffff00",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#ffff00",
        fillOpacity: 0.4
    });


    Miami.setMap(map);
    sanf.setMap(map);
    nyc.setMap(map);
    nor.setMap(map);
    Qcity.setMap(map);
    mtl.setMap(map);


    heatmap = new google.maps.visualization.HeatmapLayer({
          data: getPoints(),
          map: map
        });

    function getPoints() {
        var returnVal = [];

        $.getJSON( "https://pmishra.me/js/ajax/testfile.json", function( data ) {
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
        map.setZoom(3);

        $("#b").css("background-color", "white");
        $("#c").css("background-color", "white");
        $("#a").css("background-color", "#e6ffff");

        des = "Hubbard Glacier is a glacier located in eastern Alaska and part of Yukon, Canada, and named after Gardiner Hubbard.";
        imglink = "img/a.jpg";
        glink = "graphs/a.PNG";
        giflink = "gifs/a.gif";
        polygon1();

        map.setCenter({lat: 60.47658, lng: -144.46691});
        map.setZoom(5);
        changebottom(des, imglink, glink, giflink);
    }

    function bClicked ()
    {
        map.setZoom(3);


        $("#a").css("background-color", "white");
        $("#c").css("background-color", "white");
        $("#b").css("background-color", "#e6ffff");

        des = "The Barnes Ice Cap is an ice cap located in central Baffin Island, Nunavut, Canada. It covers close to 6,000 km2 (2,300 sq mi) in the area of the Baffin Mountains. It has been thinning due to regional warming.";
        imglink = "img/b.jpg";
        glink = "graphs/b.PNG";
        giflink = "gifs/b.gif";

        polygon2();

        changebottom(des, imglink, glink, giflink);

        map.setCenter({lat: 70.16, lng: -76.81});
        map.setZoom(5);

    }

    function cClicked ()
    {
        map.setZoom(3);


        $("#a").css("background-color", "white");
        $("#b").css("background-color", "white");
        $("#c").css("background-color", "#e6ffff");

        des = "The Athabasca Glacier is one of the six principal 'toes' of the Columbia Icefield, located in the Canadian Rockies. The glacier currently recedes at a rate of about 5 metres (16 ft) per year.";
        imglink = "img/c.jpg";
        glink = "graphs/c.PNG";
        giflink = "gifs/c.gif";
        polygon3();
        map.setCenter({lat: 52.38365, lng: -115.92773});

        changebottom(des, imglink, glink, giflink);
        map.setZoom(5);

    }


function changebottom(des, imglink, glink, giflink){



    $("#des").html(des);
    $("#imglink").attr("src",imglink);
    $("#glink").attr("src",glink);
    $("#giflink").attr("src",giflink);


}
