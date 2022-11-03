let map;

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const southstation = { lat: 42.352271, lng: -71.05524200000001 };

    // The map, centered at Southstation
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: southstation,
    });

    const icons = {
        car: {
            icon: "car.png",
        }
    };
    const features = [
        {
            position: new google.maps.LatLng(42.3453, - 71.0464),
            type: "car",
        },
        {
            position: new google.maps.LatLng(42.3662, - 71.0621),
            type: "car",
        },
        {
            position: new google.maps.LatLng(42.3603, - 71.0547),
            type: "car",
        },
        {
            position: new google.maps.LatLng(42.3472, - 71.0802),
            type: "car",
        },
        {
            position: new google.maps.LatLng(42.3663, - 71.0544),
            type: "car",
        },
        {
            position: new google.maps.LatLng(42.3542, - 71.0704),
            type: "car",
        }
    ];
    // Create markers.
    for (let i = 0; i < features.length; i++) {
        const marker = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type].icon,
            map: map,
        });
    }
}

window.initMap = initMap;