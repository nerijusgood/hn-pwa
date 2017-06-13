import { h, Component } from 'preact'
import { Link } from 'preact-router'
import Container from '../components/container/container'

const API = 'https://hacker-news.firebaseio.com'
const asJson = r => r.json()

export default class Contaienr extends Component {
  state = {
    items: [],
    loading: true
  }

  // React way to load when client is ready
  componentDidMount() {
    console.log('Bonjour Zmags')
    this.loadNews()
  }

  // Shuffle array: https://stackoverflow.com/a/12646864/3483685
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
          this.setState({ items }) // React/Preact way to set state
          return items
        }
      )
      .then(items => Promise.all(
        items.map(
          item => fetch(`${API}/v0/user/${item.by}.json`).then(asJson)
        )
      ))
      .then((users) => {
          let items = this.state.items.map(item => {
            return Object.assign(item, users.find(user => {
              return user && item.by === user.id
            }))
          })
          this.setState({ items, loading: false }) // Overwrite old items with new updated
        }
      )
  }

  render({ }, { items, loading }) {
    return (
      <div className="page page__home">
        <Container>
          <ul>
            { loading && <li>LOADING</li>}
            { items.map( (item, i) => (
              <li ke={i}><b>{item.score}</b>, {item.title} // by {item.by} (karma: {item.karma})</li>
            )) }
          </ul>
        </Container>
      </div>
    )
  }
}
