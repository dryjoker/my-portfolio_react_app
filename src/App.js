import './App.css';
import Navigation from './screens/navigationBar/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticleAnimation from 'react-particle-animation';
import Header from './screens/header/Header';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Header></Header>
      <ParticleAnimation
        style={{ height: '96vh' }}
        background={{ r: 21, g: 22, b: 23, a: 1 }}
        particleSpeed={0.5}
        particleRadius={1.5}

      />
    </div>
  );
}

export default App;
