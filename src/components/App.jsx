import { ITEMS } from "../lib/constants";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { useState } from "react";

function App() {
	const [items, setItems] = useState(ITEMS);

	const handleAddingAnItem = (newItemText) => {
		const newItem = {
			id: new Date().getTime(),
			name: newItemText,
			packed: false,
		};
		const newItems = [...items, newItem];
		setItems(newItems);
	};

	const handleRemovingAllItems = () => {
		setItems([]);
	};

	const handleResetToInitialItems = () => {
		setItems(ITEMS);
	};

	const handleMarkAllAsComplete = () => {
		const newItems = items.map((item) => {
			return { ...item, packed: true };
		});
		setItems(newItems);
	};
	const handleMarkAllAsIncomplete = () => {
		const newItems = items.map((item) => {
			return { ...item, packed: false };
		});
		setItems(newItems);
	};

	return (
		<>
			<BackgroundHeading />
			<main>
				<Header />
				<ItemList items={items} />
				<Sidebar
					setItems={setItems}
					handleAddingAnItem={handleAddingAnItem}
					handleRemovingAllItems={handleRemovingAllItems}
					handleResetToInitialItems={handleResetToInitialItems}
					handleMarkAllAsComplete={handleMarkAllAsComplete}
					handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
				/>
			</main>
			<Footer />
		</>
	);
}

export default App;
