var map, heatMap;
function myMap() {

map=new google.maps.Map(document.getElementById("googleMap"),{
    zoom:5,
    center:new google.maps.LatLng(43.6532, -79.3832),
});


var poly1First = new google.maps.LatLng(58.983991,5.734863);
var poly1Second = new google.maps.LatLng(52.395715,4.888916);
var poly1Third = new google.maps.LatLng(51.508742,-0.120850);

poly1 = new google.maps.Polygon({
    path: [poly1First, poly1Second, poly1Third],
    strokeColor: "#0000FF",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#0000FF",
    fillOpacity: 0.4
});

var poly2First = new google.maps.LatLng(45.983991,3.734863);
var poly2Second = new google.maps.LatLng(32.395715,9.888916);
var poly2Third = new google.maps.LatLng(21.508742,-2.120850);

poly2 = new google.maps.Polygon({
    path: [poly2First, poly2Second, poly2Third],
    strokeColor: "#0000FF",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#0000FF",
    fillOpacity: 0.4
});

var poly3First = new google.maps.LatLng(20.983991,-3.734863);
var poly3Second = new google.maps.LatLng(89.395715,-12.888916);
var poly3Third = new google.maps.LatLng(36.508742,-21.120850);

poly3 = new google.maps.Polygon({
    path: [poly3First, poly3Second, poly3Third],
    strokeColor: "#0000FF",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#0000FF",
    fillOpacity: 0.4
});

var poly4First = new google.maps.LatLng(32.91,-1.734863);
var poly4Second = new google.maps.LatLng(122.395715,-122.888916);
var poly4Third = new google.maps.LatLng(3.508742,-21.120850);

poly4 = new google.maps.Polygon({
    path: [poly4First, poly4Second, poly4Third],
    strokeColor: "#0000FF",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#0000FF",
    fillOpacity: 0.4
});

var poly5First = new google.maps.LatLng(23.983991,-42.734863);
var poly5Second = new google.maps.LatLng(12.395715,-12.888916);
var poly5Third = new google.maps.LatLng(32.508742,-221.120850);

poly5 = new google.maps.Polygon({
    path: [poly5First, poly5Second, poly5Third],
    strokeColor: "#0000FF",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#0000FF",
    fillOpacity: 0.4
});



// heatmap = new google.maps.visualization.HeatmapLayer({
//       data: getPoints(),
//       map: map
//     });
//
//     function getPoints() {
//         return [
//           new google.maps.LatLng(37.782551, -122.445368),
//           new google.maps.LatLng(37.782745, -122.444586),
//           new google.maps.LatLng(37.782842, -122.443688),
//           new google.maps.LatLng(37.782919, -122.442815),
//           new google.maps.LatLng(37.782551, -122.445368),
//           new google.maps.LatLng(37.782745, -122.444586),
//           new google.maps.LatLng(37.782842, -122.443688),
//           new google.maps.LatLng(37.782919, -122.442815),
//           new google.maps.LatLng(37.782551, -122.445368),
//           new google.maps.LatLng(37.782745, -122.444586),
//           new google.maps.LatLng(37.782842, -122.443688),
//           new google.maps.LatLng(37.782919, -122.442815)
//       ];
//   };
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
