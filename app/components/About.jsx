var React = require('react');


var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About </h1>
            <p>This is a weather application based on React.</p>
            <p>
                Here are some of the tools Ive used:
            </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - This was the javascript framework used
                </li>
                <li>
                    <a href="http://openWeatherMap.org">Open Weather Map</a> - Used to search for weather data by city name
                </li>
            </ul>
        </div>

    );
};

module.exports = About;
