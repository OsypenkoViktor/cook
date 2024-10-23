import { ReactNode } from "react";

export interface INavigationItem {
  link: string;
  text: string;
  icon: ReactNode;
}

export default function NavigationItem({ link, text, icon }: INavigationItem) {
  return (
    <li className="bg-secondary p-2 m-1 text-background rounded-sm mx-2 flex items-center gap-2 transition-all duration-200 active:bg-white hover:bg-muted hover:text-black">
      {icon}
      <a href={link}>{text}</a>
    </li>
  );
}
