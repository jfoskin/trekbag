import { ITEMS } from "../lib/constants";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { useState } from "react";

function App() {
	const [items, setItems] = useState(ITEMS);

	return (
		<>
			<BackgroundHeading />
			<main>
				<Header />
				<ItemList items={items} />
				<Sidebar setItems={setItems} />
			</main>
			<Footer />
		</>
	);
}

export default App;
