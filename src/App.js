import React from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Switch, Route } from 'react-router-dom'
import withSuspense from './hoc/withSuspense'

const GlassContainer = React.lazy(() => import('./components/Glass/GlassContainer'))
const DiffContainer = React.lazy(() => import('./components/Diff/DiffContainer'))

const SuspendedGlass = withSuspense(GlassContainer)
const SuspendedDiff = withSuspense(DiffContainer)

function App() {
  return (
    <div className="App">
      <Header />
      <div className="s.content">
        <Switch>
          <Route path='/glass' render={() => <SuspendedGlass />} />
          <Route path='/diff' render={() => <SuspendedDiff />} />
        </Switch>
      </div>
    </div>
  )
}

export default App
