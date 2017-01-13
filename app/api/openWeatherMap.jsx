var axios = require('axios');

// c550b5589a70f6bc9854465070202c37
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c550b5589a70f6bc9854465070202c37&units=metric';

module.exports = {
    getTemp: function(location){
        //for all the %20 etc.. on web urls
        var encodedLocation = encodeURIComponent(location);
        //template strings
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res){
            // debugger;
            if(res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(res){
            throw new Error('Unable to fetch weather for this location');
        });
    }
}
