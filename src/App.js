import './App.css';
import Navigation from './screens/navigationBar/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticleAnimation from 'react-particle-animation'
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <ParticleAnimation
        style={{ height: '96vh' }}
        background={{ r: 21, g: 22, b: 23, a: 1 }}
        particleSpeed={0.1}
        particleRadius={1.5}
      />
    </div>
  );
}

export default App;
