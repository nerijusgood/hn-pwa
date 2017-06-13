import { h, Component } from 'preact'
import Navbar from '../Navbar/navbar';

export default class Contaienr extends Component {
  componentDidMount() {
    console.log('Hello')
  }

  render({
    children,
    ...props
  }) {
    return (
      <div id='app'>
        <Navbar />
        <main id='content'>
          { children }
        </main>
      </div>
    );
  }
}
