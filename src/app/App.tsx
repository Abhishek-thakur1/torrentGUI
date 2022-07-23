import React, {Fragment} from 'react'
import Home from './pages/home'
import GlobalStyle from './globalStyle'

const App: React.FC = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Home />
    </Fragment>
  )
}

export default App