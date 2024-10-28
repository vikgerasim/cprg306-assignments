export default function Item({ item, onSelect }) {
  let { name, quantity, category } = item;

  return (
    <div  className="bg-gray-800 m-4 w-96 p-1.5 hover:bg-gray-700" onClick={() => onSelect(item)}>
      <h2 className="text-xl font-bold">{name}</h2>
      <p>
        Buy {quantity} in {category}
      </p>
    </div>
  );
}