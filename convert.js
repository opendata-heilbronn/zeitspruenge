"use strict";
const fs = require('fs');
const locations = require('./locations.json');

const result = {
    "type": "FeatureCollection",
    "features": locations.map((location) => {
        return {
            "type": "Feature",
            "properties": location,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    parseFloat(location['Position Laengengrad'].replace(/,/, '.')),
                    parseFloat(location['Position Breitengrad'].replace(/,/, '.'))
                ]
            }
        };
    })
};

fs.writeFileSync('locations.geojson', JSON.stringify(result, null, 4));