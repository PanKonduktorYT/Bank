function updateTime() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);
updateTime(); // Initial call to display the time immediately

function getLocation() {
    const locationElement = document.getElementById('location');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        locationElement.innerHTML = "Geolokalizacja nie jest wspierana przez tę przeglądarkę.";
    }
}

function showPosition(position) {
    const locationElement = document.getElementById('location');
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    locationElement.innerHTML = `Szerokość geograficzna: ${latitude} <br> Długość geograficzna: ${longitude}`;
}

function showError(error) {
    const locationElement = document.getElementById('location');
    switch(error.code) {
        case error.PERMISSION_DENIED:
            locationElement.innerHTML = "Użytkownik odmówił udostępnienia lokalizacji.";
            break;
        case error.POSITION_UNAVAILABLE:
            locationElement.innerHTML = "Informacje o lokalizacji są niedostępne.";
            break;
        case error.TIMEOUT:
            locationElement.innerHTML = "Przekroczono czas oczekiwania na lokalizację.";
            break;
        case error.UNKNOWN_ERROR:
            locationElement.innerHTML = "Wystąpił nieznany błąd.";
            break;
    }
}