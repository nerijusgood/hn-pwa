import { h, Component } from 'preact'

export default class Container extends Component {
  render({
    children,
    ...props
  }) {
    return (
      <div id='app'>
        <main id='content'>
          { children }
        </main>
      </div>
    );
  }
}
