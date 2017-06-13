import { h } from 'preact';
import { Link } from 'preact-router';

export default function () {
	return (
		<header className="header">
			<h1>nerijusgood</h1>
			<nav>
				<Link href="/">Home</Link>
				<Link href="/work">Work</Link>
				<Link href="/about">About</Link>
				<Link href="/hire">Hire</Link>
			</nav>
		</header>
	)
}
