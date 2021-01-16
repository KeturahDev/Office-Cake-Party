import './styles/App.css';
import {WebcamComponent} from './components/cam'
import Welcome from './views/Welcome'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <Welcome />
      {/* <WebcamComponent /> */}
    </div>
  );
}

export default App;
