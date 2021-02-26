# react-image
> Better image for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-image
```

## properties
| Name      | Type   | Required | Default | Description                                                    |
| --------- | ------ | -------- | ------- | -------------------------------------------------------------- |
| className | string | false    | -       | The extended className for component.                          |
| objectFit | enum   | false    | 'cover' | How an <img> or <video> should be resized to fit its container |


## usage
1. import css
  ```scss
  @import "~@jswork/react-image/dist/style.css";

  // or use sass
  @import "~@jswork/react-image/dist/style.scss";

  // customize your styles:
  $react-image-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactImage from '@jswork/react-image';
  import './assets/style.scss';

  class App extends React.Component {
    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-image">
          <p>
            <ReactImage
              style={{ width: 400, height: 200 }}
              src="https://tva1.sinaimg.cn/large/006tNbRwly1gapa83qtc2j31670u0wsl.jpg"
            />
          </p>
          <p>
            <ReactImage
              objectFit="contain"
              style={{ width: 400, height: 200 }}
              src="https://tva1.sinaimg.cn/large/006tNbRwly1gapa83qtc2j31670u0wsl.jpg"
            />
          </p>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-image/


## license
Code released under [the MIT license](https://github.com/afeiship/react-image/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-image
[version-url]: https://npmjs.org/package/@jswork/react-image

[license-image]: https://img.shields.io/npm/l/@jswork/react-image
[license-url]: https://github.com/afeiship/react-image/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-image
[size-url]: https://github.com/afeiship/react-image/blob/master/dist/react-image.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-image
[download-url]: https://www.npmjs.com/package/@jswork/react-image
