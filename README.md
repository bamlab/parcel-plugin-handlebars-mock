# @bam.tech/parcel-plugin-handlebars-mock

Populate HTML file with mock data in development.

## Installation

`yarn add @bam.tech/parcel-plugin-handlebars-mock`

## Usage

- Create a `src/mock` directory.
- For each html file (named `foo.html` for example), create a `src/mock/foo.html.js` with the mock content:

```js
module.exports = {
  bar: "baz",
};
```

- If `NODE_ENV` is `production`, then the plugin is not applied.
