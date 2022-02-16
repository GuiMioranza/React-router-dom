import './App.css';
import AppRoutes from './Routes'
import Contexts from './Hooks'


export default function App() {
  return (
    <Contexts>
      <AppRoutes />  
    </Contexts>
  );
}