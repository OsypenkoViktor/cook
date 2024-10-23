import NavigationItem, { INavigationItem } from "./NavigationItem";
import { HomeIcon, ListBulletIcon } from "@radix-ui/react-icons";

const navigationListData: INavigationItem[] = [
  { link: "#", text: "Main page", icon: <HomeIcon /> },
  { link: "#", text: "Products base", icon: <ListBulletIcon /> },
];

export default function NavigationList() {
  return (
    <ul className="">
      {navigationListData.map((listItem, index) => (
        <NavigationItem key={index} {...listItem} />
      ))}
    </ul>
  );
}
