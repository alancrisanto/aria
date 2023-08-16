import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	return (
		<main className="p-8">
			<div className={styles.background}>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className="hero-section flex items-center justify-between">
				<div className="title">
					<h1 className="text-7xl font-bold">
						<span className="text-purple-600">Explora</span> Tu Potencial con{" "}
						<span className="text-purple-600">Aria Studio</span>
					</h1>
				</div>
				<div className="image">
					<Image src="/girl01.png" alt="girl with virtual glasses" width={700} height={400} />
				</div>
			</div>
			<h1>Hola Aria desde main page</h1>
			<div id="servicios">
				<h2>Productos</h2>
			</div>
		</main>
	);
}
