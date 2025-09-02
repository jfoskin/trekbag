import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { useState } from "react";

function App() {
	const [items, setItems] = useState([]);

	return (
		<>
			<BackgroundHeading />
			<main>
				<Header />
				<ItemList />
				<Sidebar items={items} setItems={setItems} />
			</main>
			<Footer />
		</>
	);
}

export default App;
