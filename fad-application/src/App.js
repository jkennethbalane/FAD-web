import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="bg-black h-dvh">
      <BrowserRouter>
        <NavigationBar/>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
