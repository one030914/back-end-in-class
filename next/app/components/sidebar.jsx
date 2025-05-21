import NavLink from "./navlink";

export default function Sidebar() {
    return (
        <nav className="w-64 bg-stone-100 p-4 border-r">
            <h2 className="text-xl font-bold mb-6">breakfirst store managment</h2>
            <div className="space-y-2">
                <NavLink href="/auth">Login/Logout</NavLink>
                <NavLink href="/overview">Overview</NavLink>
                <NavLink href="/menu">Menu</NavLink>
                <NavLink href="/order">Order</NavLink>
                <NavLink href="/inventory">Inventory</NavLink>
                <NavLink href="/blog">Blog (dynamic route)</NavLink>
                <NavLink href="/test">Template Test</NavLink>
                <NavLink href="/home">Suspension Menu</NavLink>
                <NavLink href="/todo">Todo</NavLink>
                <NavLink href="/todo2">Todo2</NavLink>
                <NavLink href="/">Next.js template</NavLink>
            </div>
        </nav>
    );
}
