'use strict';

/**
 * @module src/geojson.merge
 */

/**
 * Merges 2 geojson files
 *
 * @param {object} [name=geojson1] First GeoJson Obect
 *
 * @param {object} [name=geojson2] Second GeoJson Obect
 *
 * @return {object} Returned object
 *
 * @example
 *
 *  import merge from 'src/geojson.merge';
 *
 *  merge({},{}}); // {}
 */
export default function geojsonMerge(json1,json2) {
  const newGeoJson = {},
  		keys1 = Object.keys(json1),
  		keys2 = Object.keys(json2);
  keys1.forEach(function (key) {
  	newGeoJson[key] = json1[key];
  });
  keys2.forEach(function (key) {
  	if (key in newGeoJson) {
  		console.log("repeat");
  	} else {
  		newGeoJson[key] = json2[key];
  	}
  });
  	


  return newGeoJson;
}
