import { h, Component } from 'preact'
import { Link } from 'preact-router'
import Container from '../components/container/container'

const API = 'https://hacker-news.firebaseio.com'
const asJson = r => r.json()

export default class Contaienr extends Component {
  state = {
    tempItems: [],
    items: [],
    loading: true
  }

  // React way to load when client is ready
  componentDidMount() {
    console.log('Howdy Zmags')
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
    this.setState({ loading: true, items: [] })

    fetch(`${API}/v0/topstories.json`)
      .then(asJson)
      .then(items => Promise.all(
        this.shuffleArray(items).slice(0, 10).map(
          item => fetch(`${API}/v0/item/${item}.json`).then(asJson)
        )
      ))
      .then((items) => {
          items = items.sort( (a, b) => b.score - a.score ) // Sort score
          this.setState({ tempItems: items }) // React/Preact way to set state
          return items
        }
      )
      .then(items => Promise.all(
        items.map(
          item => fetch(`${API}/v0/user/${item.by}.json`).then(asJson)
        )
      ))
      .then((users) => {
          let items = this.state.tempItems.map(item => {
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
      <div className='page page-home'>
        <Container>
          <h1 class='header'>Hacker News</h1>
          <button class='button' disabled={loading} onClick={this.loadNews.bind(this)}>Reload</button>
          { loading && <div class='loader'>
            <span></span>
            <span></span>
            <span></span>
          </div>}
          <ul class='news'>
            { items.map( (item, i) => (
              <li class='news-item' key={i}>
                  <div class='news-score'>{item.score}</div>
                  <a class='news-content' href={item.url} target='_blank'>
                    <span>{item.title}</span>
                    <span>by {item.by}</span>
                    <div class='news-karma'>{item.karma}</div>
                  </a>
              </li>
            )) }
          </ul>
        </Container>
      </div>
    )
  }
}
