var map, heatMap;

function myMap() {

    map=new google.maps.Map(document.getElementById("googleMap"),{
        zoom:5,
        center:new google.maps.LatLng(43.6532, -79.3832),
        mapTypeId: 'satellite'

    });

    // Create a <script> tag and set the USGS URL as the source.
    var script = document.createElement('script');

    // This example uses a local copy of the GeoJSON stored at
    // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
    script.src = 'https://prayashm97.github.io/js/ajax/Hubbard.js';
    document.getElementsByTagName('head')[0].appendChild(script);

    map.data.setStyle(function(feature) {
      var magnitude = feature.getProperty('CO2');
      return {
        icon: getCircle(magnitude)
      };
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

    var poly2First = new google.maps.LatLng(45.983991,3.734863);
    var poly2Second = new google.maps.LatLng(32.395715,9.888916);
    var poly2Third = new google.maps.LatLng(21.508742,-2.120850);

    poly2 = new google.maps.Polygon({
        path: [poly2First, poly2Second, poly2Third],
        strokeColor: "#FFFFFF",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FFFFFF",
        fillOpacity: 0.4
    });

    var poly3First = new google.maps.LatLng(20.983991,-3.734863);
    var poly3Second = new google.maps.LatLng(89.395715,-12.888916);
    var poly3Third = new google.maps.LatLng(36.508742,-21.120850);

    poly3 = new google.maps.Polygon({
        path: [poly3First, poly3Second, poly3Third],
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


    // heatmap = new google.maps.visualization.HeatmapLayer({
    //       data: getPoints(),
    //       map: map,
    //       opacity:0.6,
    // });

    // heatmap = new google.maps.visualization.HeatmapLayer({
    //       data: getPoints(),
    //       map: map
    //     });
    //
    function getPoints() {
        var returnVal = [];

        $.getJSON( "https://prayashm97.github.io/js/ajax/testfile.json", function( data ) {
          // var items = [];
          $.each( data, function( key, val ) {
            //   console.log(val.CO2);
              x = {
                  'location':new google.maps.LatLng(val.Latitude,val.Longitude), 'weight': (((val.CO2)-371)/16)
              }

              returnVal.push(x)
          });
        });
        return(returnVal);
    };
}

function getCircle(mag) {

    return {
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: 'red',
          fillOpacity: .2,
          scale: Math.pow(2, mag) / 2,
          strokeColor: 'white',
          strokeWeight: .5
        };

}
function eqfeed_callback(results) {
        map.data.addGeoJson(results);
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
