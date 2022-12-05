import Navbar from './Navbar';
import Home from './Home';
import Form from './Form';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home /><br/>
        <Form />
      </div>
    </div>
  );
}

export default App;
