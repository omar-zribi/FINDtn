import './App.css'
import PublicApp from './components/public interface/PublicApp';
import PrivateApp from './components/private interface/PrivateApp';
// import AdminApp from './components/admin interface/AdminApp';
// import Error404 from './components/error/Error404';
// import Error403 from './components/error/Error403';
// import Loading from './components/loading/Loading';

function App() {
  const token= localStorage.getItem('token');
  console.log(token)
  return (
    <div>
      {
        token===null
        ?
        (<PublicApp />)
        :
        (<PrivateApp />) 
      }
      {/* (<AdminApp />) */}
      {/* <Error404/> */}
      {/* <Error403/> */}
      {/* <Loading/> */}
    </div>
  );
}

export default App;
