import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactImage from '../src/main';
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
