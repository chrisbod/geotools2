'use strict';

import assert from 'assert';
import merge from '../src/geojson.merge';
import fs from 'fs';


const testJson1 = JSON.parse(fs.readFileSync('test/json/json1.json', 'utf8'));

describe('geojson merge', () => {
  it('it should return empty object if passed two empty objects ', () => {
    var result = merge({},{});
    assert.equal(Object.keys(result),0);
  });
  it('it should merge a json file with a dummy object', () => {
  	var result = merge(testJson1,{'dummy':true});
  	assert.equal(result.dummy,true);
  });
});
