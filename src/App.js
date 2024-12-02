import Routes from './pages/Routes';
import './App.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import AuthContextProvider, { AuthContext } from 'context/AuthContext';
// import Topbar from './components/Header/Topbar';
function App() {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  );
}

export default App;
