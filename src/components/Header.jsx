import Logo from "./Logo";
import Counter from "./Counter";

export default function Header({ totalNumberOfItems, packedItems }) {
	return (
		<header>
			<Logo />
			<Counter
				totalNumberOfItems={totalNumberOfItems}
				packedItems={packedItems}
			/>
		</header>
	);
}
