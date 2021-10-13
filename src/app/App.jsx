import { Route, Switch, Redirect } from 'react-router-dom'
import { ThemeProvider } from './components/providers/ThemeProvider'
import Card  from './pages/Card'
import EditCard  from './pages/EditCard'
import PageNotFound  from './pages/PageNotFound'

function App() {
  return (
    <ThemeProvider>
      <div className='layout-app'>
          <Switch>
            <Route path='/' exact component={Card} />
            <Route path='/editcard' component={EditCard} />
            <Route path='/404' component={PageNotFound} />
            <Redirect to='/404' />
          </Switch>
      </div>
    </ThemeProvider>
  )
}

export default App
