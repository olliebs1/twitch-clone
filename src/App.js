import './App.css';
import Body from './Body';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    //BEM 
    <div className="app">
      <Header />
      <div className="app_main">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
