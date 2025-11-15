const map = L.map('map').setView([11.5691, 104.9184], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);


// L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png', {
//     maxZoom: 20
// }).addTo(map);




// Multiple locations , 
const places = [
    { name: "BROWN Coffee | IFL", lat: 11.568315617007924, lng: 104.89510350481484 },
    { name: "BROWN Coffee | IFL 2", lat: 11.567578203179364, lng: 104.89345761408862 },
    { name: "BROWN Roastery | BKK", lat: 11.553991835047608, lng: 104.92657430869987 }
];


places.forEach((place, index) => {
    var idLabel = "name_" + (index +1);    
    document.getElementById(idLabel).textContent = "GoCC " + place.name;


    const marker = L.marker([place.lat, place.lng]).addTo(map);

    marker.on("click", () => {
        // Open Google Maps direction
        const url = `https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}`;
        window.open(url, "_blank"); // open in new tab
    });

    marker.bindPopup(`📍 ${place.name}<br><small>Click marker to navigate</small>`);

});
