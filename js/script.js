const key = 'ykfzd0G1vmNNGi9yIbVG';

// Create Map Object
const map = L.map('map').setView([16.439625, 102.828728], 12);

// load basemap tilelayer
const osm = L.maptilerLayer({
    apiKey: key,
    style: L.MaptilerStyle.OPENSTREETMAP, //optional
})

const satellite = L.maptilerLayer({
    apiKey: key,
    style: L.MaptilerStyle.SATELLITE, //optional
});

// add basemap to map
osm.addTo(map);

// Coordinates Mouse
const coordinates = new L.control.coordinates({
    position:"bottomright",
    useDMS:false,
    labelTemplateLat:"Latitude: {y}",
	labelTemplateLng:"Longitude: {x}",
    useLatLngOrder: true
}).addTo(map);

// Current Location
const currentLocation = L.control.locate().addTo(map);

//Control MiniMap
baseMapUrl = 'https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=ykfzd0G1vmNNGi9yIbVG';
const baseMap = new L.tileLayer(baseMapUrl, { minZoom: 0, maxZoom: 13 });
const miniMap = new L.Control.MiniMap(baseMap, { width: 200, height: 200 }).addTo(map);

// Add Layers
const nai_mueang = new L.GeoJSON.AJAX('https://api.maptiler.com/data/44045d05-6679-440d-8e1e-b551116205c4/features.json?key=ykfzd0G1vmNNGi9yIbVG', {
    style: function (features) {
        return {fillOpacity: .75}
    }
});

const lu_nm16 = new L.GeoJSON.AJAX('https://api.maptiler.com/data/d1115910-bec3-4266-96a3-aecad011b10b/features.json?key=ykfzd0G1vmNNGi9yIbVG', {
    style: function (features) {
        const lu_code = features.properties.LU_CODE
        if (lu_code == 'A') {
            return {
                color: features.properties.color,
                fillOpacity: .75
            }
        } else if (lu_code == 'F') {
            return {
                color: features.properties.color,
                fillOpacity: .75
            }
        } else if(lu_code == 'M') {
            return {
                color: features.properties.color,
                fillOpacity: .75
            }
        } else if(lu_code == 'U') {
            return {
                color: features.properties.color,
                fillOpacity: .75
            }
        } else if(lu_code == 'W') {
            return {
                color: features.properties.color,
                fillOpacity: .75
            }
        }
    },
    onEachFeature: function (features, layer) {
        layer.bindPopup(`<b>รหัสการใช้ที่ดิน:</b> ${features.properties.LU_CODE}<br><b>ชื่อการใช้ที่ดิน:</b> ${features.properties.Landuse_Name}<br><b>พื้นที่ทั้งหมด (ตร.กม.):</b> ${features.properties.Area}`);
    }
});

const lst_nm16 = new L.GeoJSON.AJAX('https://api.maptiler.com/data/cd98dcde-0277-41ce-a161-a2b055da296c/features.json?key=ykfzd0G1vmNNGi9yIbVG', {
    style: function (features) {
        const thermal = features.properties.thermalLevel
        if (thermal == 'Very cold') {
            return {
                color: features.properties.color,
                fillOpacity: .75
            }
        } else if (thermal == 'Cold') {
            return {
                color: features.properties.color,
                fillOpacity: .75
            }
        } else if(thermal == 'Cool') {
            return {
                color: features.properties.color,
                fillOpacity: .75
            }
        } else if(thermal == 'Slightly cool') {
            return {
                color: features.properties.color,
                fillOpacity: .75
            }
        } else if(thermal == 'Comfortable') {
            return {
                color: features.properties.color,
                fillOpacity: .75
            }
        } else if(thermal == 'Slightly warm') {
            return {
                color: features.properties.color,
                fillOpacity: .75
            }
        } else if(thermal == 'Warm') {
            return {
                color: features.properties.color,
                fillOpacity: .75
            }
        } else if(thermal == 'Hot') {
            return {
                color: features.properties.color,
                fillOpacity: .75
            }
        } else if(thermal == 'Very hot') {
            return {
                color: features.properties.color,
                fillOpacity: .75
            }
        }
    },
    onEachFeature: function (features, layer) {
        layer.bindPopup(`<b>ระดับความร้อน:</b> ${features.properties.thermalLevel}<br><b>พื้นที่ทั้งหมด (ตร.กม.):</b> ${features.properties.Area}`);
    }
});

const uhi_nm16 = new L.GeoJSON.AJAX('https://api.maptiler.com/data/a805371f-40a8-4823-91c1-af5d057afb24/features.json?key=ykfzd0G1vmNNGi9yIbVG', {
    style: function (features) {
        const class_uhi = features.properties.Class
        if (class_uhi == 'Very weak heat island') {
            return {
                color: features.properties.color,
                fillOpacity: .75
            }
        } else if (class_uhi == 'Weak heat island') {
            return {
                color: features.properties.color,
                fillOpacity: .75
            }
        } else if(class_uhi == 'Moderate heat island') {
            return {
                color: features.properties.color,
                fillOpacity: .75
            }
        } else if(class_uhi == 'Strong heat island') {
            return {
                color: features.properties.color,
                fillOpacity: .75
            }
        } else if(class_uhi == 'Very strong heat island') {
            return {
                color: features.properties.color,
                fillOpacity: .75
            }
        }
    },
    onEachFeature: function (features, layer) {
        layer.bindPopup(`<b>Class:</b> ${features.properties.Class}<br><b>พื้นที่ทั้งหมด (ตร.กม.):</b> ${features.properties.Area}`);
    }
});

const utfvi_nm16 = new L.GeoJSON.AJAX('https://api.maptiler.com/data/c0d73390-5b89-441b-bde8-48d0589ee364/features.json?key=ykfzd0G1vmNNGi9yIbVG',{
    style: function (features) {
        const cat_utfvi = features.properties.Category
        if (cat_utfvi == 'Very Good') {
            return {
                color: features.properties.color,
                fillOpacity: .75
            }
        } else if (cat_utfvi == 'Good') {
            return {
                color: features.properties.color,
                fillOpacity: .75
            }
        } else if(cat_utfvi == 'Bad') {
            return {
                color: features.properties.color,
                fillOpacity: .75
            }
        } else if(cat_utfvi == 'Normal') {
            return {
                color: features.properties.color,
                fillOpacity: .75
            }
        } else if(cat_utfvi == 'Worse') {
            return {
                color: features.properties.color,
                fillOpacity: .75
            }
        } else if(cat_utfvi == 'Worst') {
            return {
                color: features.properties.color,
                fillOpacity: .75
            }
        }
    },
    onEachFeature: function (features, layer) {
        layer.bindPopup(`<b>หมวดหมู่:</b> ${features.properties.Category}<br><b>พื้นที่ทั้งหมด (ตร.กม.):</b> ${features.properties.Area}`);
    }
});

const change_1617 = new L.GeoJSON.AJAX('https://api.maptiler.com/data/b6fa122d-727c-497e-a776-b3fc08a564ca/features.json?key=ykfzd0G1vmNNGi9yIbVG',{
    style: function (features) {
        const class_change = features.properties.Class
        if (class_change == 'Change') {
            return {
                color: features.properties.color,
                fillOpacity: .75
            }
        } else if (class_change == 'Unchanged') {
            return {
                color: features.properties.color,
                fillOpacity: .75
            }
        }
    },
    onEachFeature: function (features, layer) {
        layer.bindPopup(`<b>Class:</b> ${features.properties.Class}<br><b>พื้นที่ทั้งหมด (ตร.กม.):</b> ${features.properties.Area}`);
    }
});

// Control Layer
var baseMaps = {
    "OSM": osm,
    "Satellite": satellite
};

var overlays = {
    "เทศบาลนครขอนแก่น": nai_mueang,
    "Landuse ปี 2016": lu_nm16,
    "อุณหภูมิพื้นผิว ปี 2016": lst_nm16,
    "UHI ปี 2016":uhi_nm16,
    "UTFVI ปี 2016": utfvi_nm16,
    "การเปลี่ยนแปลงของ UHI ปี 2016-2017": change_1617
};
var controlLayer = L.control.layers(baseMaps, overlays).addTo(map);