import { CloseIconSvg } from "./CloseIconSvg";
import { Logo } from "./Logo";
import { MenuIconSvg } from "./MenuIconSvg";

interface SidebarProps {
  setIsSidebarOpen: (v: boolean) => void;
  isSidebarOpen: boolean;
}
export function Header({setIsSidebarOpen, isSidebarOpen}: SidebarProps) {


  return (
    <header className="w-full py-5 flex items-center justify-between xl:justify-center bg-gray-700 border-b border-gray-600 px-8 xl:px-0">
      <Logo />
      <button 
      className="xl:hidden cursor-pointer"
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
      {isSidebarOpen? <CloseIconSvg /> : <MenuIconSvg />}
      </button>
    </header>
  )
}