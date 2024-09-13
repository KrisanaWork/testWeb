var queryLayer; // The queried layer
var baseMaps;
var key = 'ykfzd0G1vmNNGi9yIbVG';

var mapObj = L.map('map', {
    center: [16.439625, 102.828728],
    zoom: 12
});

const osm = L.maptilerLayer({
    apiKey: key,
    style: L.MaptilerStyle.OPENSTREETMAP, //optional
})

const satellite = L.maptilerLayer({
    apiKey: key,
    style: L.MaptilerStyle.SATELLITE, //optional
});

// Add Basemap to Map
osm.addTo(mapObj);