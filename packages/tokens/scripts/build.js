const StyleDictionary = require('style-dictionary');
const transformers = require('../src/transformers');
const path = require('path');

console.log('Dictionary build started...');
console.log('\n==============================================');

console.log('Registering transformers...');
transformers.register(StyleDictionary);

console.log('Applying configurations...')
const configPath = path.resolve(__dirname, '../src/config.json');
StyleDictionaryExtended = StyleDictionary.extend(configPath);

console.log('Building for all platforms...')
StyleDictionaryExtended.buildAllPlatforms();

console.log('\n==============================================');
console.log('\nDictionary build completed!');
