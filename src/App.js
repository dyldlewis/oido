import logo from './logo.svg';
import logos from './logos.png'
import './App.css';
import Button from './button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logos} className="App-logo" alt="logo" />
        <p>
          Welcome to an example Oido landing page built with React
        </p>
        <a
          className="App-link"
          href="https://www.github.com/dyldlewis/oido"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Github Repo
        </a>
        <div className="button-group">
        <Button >Buy now</Button>
        <Button> Learn more</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
