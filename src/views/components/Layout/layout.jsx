import { h, Component } from 'preact'
import Navbar from '../Navbar/navbar';

export default class Contaienr extends Component {
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
