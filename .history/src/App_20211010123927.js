import './App.css';
import Dataset from './components/Dataset';
import DatasetState from './context/dataset/DatasetState';

function App() {
  console.log('*** App Render ***');

  return (
    <div>
      <h1>Generative Dataset Manager</h1>
      <DatasetState>
      </DatasetState>
    </div>
  );
}

export default App;
