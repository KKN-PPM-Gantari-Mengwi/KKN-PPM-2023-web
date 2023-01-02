import React from 'react'
import Head from 'next/head'
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';


export default function DefaultLayout({ title = 'Gantari Mengwi 2023', children }) {
	return (
		<div className="relative">
			<Head>
				<title>{title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
            <div className="w-fit max-w-full overflow-x-hidden">
			<Navbar />
			<div className="w-screen max-w-full overflow-x-hidden">
				<main className=''>{children}</main>
				<Footer />
			</div>
            </div>
		</div>
	);
}
