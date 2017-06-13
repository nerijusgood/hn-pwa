import { h } from 'preact'
import { Router } from 'preact-router'

import Home from './pages/home'
import Layout from './components/Layout/layout'
import Error404 from './pages/errors/404'

// import Work from './pages/work'
// import About from './pages/about'
// import Hire from './pages/hire'
// import Project from './pages/project'

// track pages on route change
const onChange = obj => window.ga && ga('send', 'pageview', obj.url)

export default (
  <Layout>
    <Router onChange={ onChange }>
      <Home path="/" />
{/*
      <Work path="/work" />
      <Project path="/work/:title" />
      <About path="/about" />
      <Hire path="/hire" /> */}

      <Error404 default />
    </Router>
  </Layout>
)
