export default function Counter({ totalNumberOfItems, packedItems }) {
	// if (items.length === 0) return <div>Start adding some items to your packing	 list!</div>;
	return <div>{`${packedItems}/${totalNumberOfItems} things packed`}</div>;
}
