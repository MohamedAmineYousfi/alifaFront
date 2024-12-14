import logo from './logo.svg';
import './App.css';
import Header from './components/Reusable/Header/Header';
import Footer from './components/Reusable/Footer/Footer';
import Dashboard from './pages/Dashboard';
import SubMenu from './components/Reusable/SubMenu/SubMenu';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <SubMenu/>
      <Dashboard />
      <Footer /> {/* Add Footer here */}
    </div>
  );
}

export default App;
