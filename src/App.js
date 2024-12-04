import Routes from './pages/Routes';

import './App.scss';

import './config/global'

import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

// import ScreenLoader from 'components/ScreenLoader';

import AuthContextProvider from 'context/AuthContext';
// import { useContext } from 'react';

// console.log(process.env.REACT_APP_FIREBASE_apiKey);


function App() {
// const isLoading= useContext();

  return (
    <AuthContextProvider theme={{ token: { colorPrimary: "#1d3557" } }}>
      {/* {isLoading ? <ScreenLoader /> : <Routes />
      } */}
      <Routes />
    </AuthContextProvider>
  );
}

export default App;
