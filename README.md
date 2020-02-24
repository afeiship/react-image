# react-image
> Better image for react.

## installation
```shell
npm install -S @feizheng/react-image
```

## update
```shell
npm update @feizheng/react-image
```

## properties
| Name      | Type   | Default | Description                           |
| --------- | ------ | ------- | ------------------------------------- |
| className | string | -       | The extended className for component. |
| objectFit | enum   | 'cover' | Default value.                        |


## usage
1. import css
  ```scss
  @import "~@feizheng/webkit-sassui-frame-wrapper/dist/index.scss";
  @import "~@feizheng/react-figure/dist/style.scss";
  @import "~@feizheng/react-image/dist/style.scss";

  // customize your styles:
  $react-image-options: ()
  ```
2. import js
  ```js
  import ReactImage from '@feizheng/react-image';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    componentDidMount() {}
    render() {
      return (
        <div className="app-container">
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
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-image/
