import logo from './logo.svg';
import './App.css';
import ContactListComponent from './components/containers/ContactListComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactListComponent></ContactListComponent>
      </header>
    </div>
  );
}

export default App;
