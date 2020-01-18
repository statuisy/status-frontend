import React from 'react';
import Link from 'next/link';

const PageHeader = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link href="/">
				<a className="navbar-brand">👈🏻HOMEPAGE</a>
			</Link>
			<span className="navbar-text">
					The Luxer One Status Site
			</span>
		</nav>
	)
};

export default PageHeader;
