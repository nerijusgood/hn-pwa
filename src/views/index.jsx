import { h } from 'preact'
import { Router } from 'preact-router'

import Home from './pages/home'
import Layout from './components/Layout/layout'
import Error404 from './pages/errors/404'
import About from './pages/about'

// track pages on route change
const onChange = obj => window.ga && ga('send', 'pageview', obj.url)

export default (
  <Layout>
    <Router onChange={ onChange }>
      <Home path="/" />
      <About path="/about" />

      <Error404 default />
    </Router>
  </Layout>
)
