const handlebars = require('handlebars');
const HTMLAsset = require('parcel-bundler/src/assets/HTMLAsset');
const path = require('path');

const MOCK_DIR = './src/mock';
const HELPER_DIR = './src/helper';

class HbsAsset extends HTMLAsset {
  parse(code) {
    require(path.join(__dirname, '../../../..', HELPER_DIR));

    if (process.env.NODE_ENV === 'production') {
      return super.parse(code);
    }

    const template = handlebars.compile(code);

    const mockData = require(path.join(__dirname, '../../../..', MOCK_DIR, this.basename));

    const html = template(mockData);

    return super.parse(html);
  }
}

module.exports = HbsAsset;
