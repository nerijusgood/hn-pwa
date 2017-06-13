import { h, Component } from 'preact'
import { Link } from 'preact-router'
import Container from '../components/container/container'

const API = 'https://hacker-news.firebaseio.com'
const asJson = r => r.json()

export default class Contaienr extends Component {
  state = { items: [] }

  // React way to load when client is ready
  componentDidMount() {
    console.log('Bonjour Zmags')
    this.loadNews()
  }

  // https://stackoverflow.com/a/12646864/3483685
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }

  loadNews() {
    fetch(`${API}/v0/topstories.json`)
      .then(asJson)
      .then(items => Promise.all(
        this.shuffleArray(items).slice(0, 10).map(
          item => fetch(`${API}/v0/item/${item}.json`).then(asJson)
        )
      ))
      .then((items) => {
          items = items.sort( (a, b) => b.score - a.score ) // Sort score
          this.setState({ items }) // React/Preact way to set it to state
        }
      )
  }

  render({ }, { items }) {
    return (
      <div className="page page__home">
        <Container>
          <ul>
            { items.map( (item, i) => (
              <li ke={i}><b>{item.score}</b>, {item.title}</li>
            )) }
          </ul>
        </Container>
      </div>
    )
  }
}
