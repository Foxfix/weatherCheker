class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.details = document.getElementById('w-details');
        this.humidity = document.getElementById('w-humidity');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
        this.feelsLike = document.getElementById('w-feels-like');
        this.presureMb = document.getElementById('w-presure-mb');
        this.presureIn = document.getElementById('w-presure-in');
    }

    paint(weather) {
        this.location.textContent = weather.display_location.full;
        this.desc.textContent = weather.weather;
        this.string = weather.temperature_string;
        this.icon.setAttribute('src', weather.icon_url);
        this.humidity.textContent = `Relative Humidity: ${weather.relative_humidity}`
        this.dewpoint.textContent = `DewPoint: ${weather.dewpoint_string}`
        this.wind.textContent = `Wind: ${weather.wind_string}`
        this.feelsLike.textContent = `Feels Like: ${weather.feelslike_string}`
        this.presureMb.textContent = `Presure Mb: ${weather.pressure_mb}`
        this.presureIn.textContent = `Presure In: ${weather.feelslikpressure_ine_string}`
    }
}