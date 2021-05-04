import Head from 'next/head'
import Link from 'next/link'

import { SimpleGrid, Box } from "@chakra-ui/react"
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Benvenuto in ClassManager
				</h1>

				<p className={styles.description}>
					Scegli l'azione che vuoi eseguire
				</p>

				<SimpleGrid columns={2} spacing={10}>
					<Box className="card">
						<Link href="/classrooms">
							<a>
								<h3>Classi &rarr;</h3>
								<p>Visualizza un elenco di classi</p>
							</a>
						</Link>
					</Box>
					<Box className="card">
						<Link href="/students">
							<a>
								<h3>Studenti &rarr;</h3>
								<p>Visualizza gli studenti</p>
							</a>
						</Link>
					</Box>
				</SimpleGrid>
			</main>

			<footer className={styles.footer}>
				Powered by Plansoft
			</footer>
		</div>
	)
}
