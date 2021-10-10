import './App.css';
import Dataset from './components/Dataset';

function App() {
  console.log('*** App Render ***');

  return (
    <div>
      <h1>Generaet Dataset Manager</h1>
      
      <Dataset />
    </div>
  );
}

export default App;
