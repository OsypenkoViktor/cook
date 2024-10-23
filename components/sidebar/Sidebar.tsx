import NavigationList from "./navigationList/NavigationList";

export default function Sidebar() {
  return (
    <div className="w-1/4 border-r h-full">
      <h2 className="text-xl text-center m-2 font-semibold">Navigation</h2>
      <NavigationList />
    </div>
  );
}
