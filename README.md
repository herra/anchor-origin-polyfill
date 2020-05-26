# HTMLAnchorElement.origin Polyfill

This is a polyfill library for `HTMLAnchorElement.origin`. 

### Features

* Detect if browsers have support for `HTMLAnchorElement.origin` and add it
* Compatible with IE8 and above


## Installation

```sh
$ npm install anchor-origin-polyfill --save
```

Babel and ES2015+:

```javascript
import 'anchor-origin-polyfill';
```

For ES5:

```javascript
require('anchor-origin-polyfill');
```

Or copy the `index.js` file to your project, and add a `script` tag in your html:

```html
<script src="index.js"></script>
```