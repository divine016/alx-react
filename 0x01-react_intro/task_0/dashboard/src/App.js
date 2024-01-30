import './App.css';
import holbertonImage from './holberton-logo.jpg';

function App() {
  return (
    <div>
      <header class='App-header'>
        <img src={holbertonImage} alt='holberton image.' />
        <h1>School dashboard</h1>
      </header>
      <body class='App-body'>
        <p>Login to access the full dashboard</p>
      </body>
      <footer class='App-footer'>
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </div>


  );
}

export default App;
