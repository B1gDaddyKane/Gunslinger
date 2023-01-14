import background from './assets/western_gunslinger_background.png';
import Navbar from './components/navbar';
function App() {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Navbar></Navbar>
    </div>
  );
}

export default App;
