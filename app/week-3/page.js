import ItemList from "./item-list";

export default function Main() {
return(
    <main className="bg-black text-white w-full min-h-screen">
        <h1 className="text-3xl font-bold p-2">Shopping List</h1>
        <ItemList />
    </main>
);
}