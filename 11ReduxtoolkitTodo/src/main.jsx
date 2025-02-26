import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './app/store'
import { Provider } from 'react-redux'
import AddTodo from './components/addTodo.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    
    <App />
    <AddTodo />
    
  </Provider>,
)
