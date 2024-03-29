import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient , QueryClientProvider} from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries:{
      retry: 0,
      refetchOnWindowFocus: false
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
