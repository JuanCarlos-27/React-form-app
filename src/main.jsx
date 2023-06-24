import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.scss';
import { FormProvider } from './context/form.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <FormProvider>
    <App />
  </FormProvider>
);
