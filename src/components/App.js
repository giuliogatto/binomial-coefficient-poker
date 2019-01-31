import React from 'react'
import UpdaterList from '../containers/UpdaterList'
import CardList from '../containers/CardList'
import Result from '../containers/Result'

const App = () => (
  <div class='container'>
    <div class='text-center'>
      <h1>Poker Binomial Coefficient Computation</h1>
    </div>
    <UpdaterList />
    <CardList />
    <Result/>
  </div>
)

export default App