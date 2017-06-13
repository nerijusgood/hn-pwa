import { h } from 'preact'
import { Link } from 'preact-router'

export default function () {
  return (
    <header class='Navbar'>
      <div class='Navbar-logo'>
        <Link href='/'>
          <svg viewBox='0 0 256 236' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid'><path d='M128.075 236.075l47.104-144.97H80.97l47.105 144.97z' fill='#E24329'/><path d='M128.075 236.074L80.97 91.104H14.957l113.12 144.97z' fill='#FC6D26'/><path d='M14.956 91.104L.642 135.16c-1.306 4.018.124 8.42 3.542 10.903l123.89 90.012L14.957 91.105z' fill='#FCA326'/><path d='M14.956 91.105H80.97L52.6 3.79c-1.46-4.493-7.815-4.492-9.274 0l-28.37 87.315z' fill='#E24329'/><path d='M128.075 236.074l47.104-144.97h66.013l-113.12 144.97z' fill='#FC6D26'/><path d='M241.194 91.104l14.314 44.056c1.306 4.018-.124 8.42-3.543 10.903l-123.89 90.012 113.12-144.97z' fill='#FCA326'/><path d='M241.194 91.105H175.18L203.55 3.79c1.46-4.493 7.815-4.492 9.274 0l28.37 87.315z' fill='#E24329'/></svg>
        </Link>
      </div>

      <nav class='Navbar-nav'>
        <input class='Navbar-input u-hide' type='checkbox' id='Navbar-menu' />
        <label for='Navbar-menu' class='Navbar-burger'>
          <span></span>
          <span class='u-visuallyHidden'>Menu</span>
        </label>
        <ul class='Navbar-list'>
          <li class='Navbar-item'><Link href='/'>Front</Link></li>
          <li class='Navbar-item'><Link href='/work'>Work</Link></li>
          <li class='Navbar-item'><Link href='/hire'>Hire</Link></li>
        </ul>
      </nav>
    </header>
  )
}
