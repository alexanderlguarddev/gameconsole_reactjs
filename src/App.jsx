import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import DashboardLayout from './layouts/DashboardLayout'

import DashboardPage from './pages/DashboardPage'

import store from './store'
import theme from './theme'

import './App.css'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <Routes>
            <Route path='/' element={ <DashboardLayout /> }>
              <Route index element={ <DashboardPage /> } />
            </Route>
          </Routes>

          <ToastContainer />
        </Provider>
      </ThemeProvider>  
    </Router>
  )
}

export default App
