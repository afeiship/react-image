import ReactImage from '../src/main';
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
