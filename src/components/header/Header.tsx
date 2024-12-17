/**
 * TODO: Add:
 * TODO: 1. Logo
 * TODO: 2. Navigation MENU Responsive (custom hook add)
 * TODO: Header should be sticky
 */

import Menu from "./Menu"

const Header = () => {
  return (
    <header className="py-4 flex items-center justify-between ">
        {/* NAME LOGO */}
        <div>
            <h4 className="text-4xl uppercase font-semibold tracking-wider">Inji.</h4>
        </div>
        {/* MENU */}
        <Menu/>
    </header>
  )
}

export default Header