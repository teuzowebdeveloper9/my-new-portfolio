import { navigationItems } from "../data/navigation";

function Navbar() {
  return (
    <nav className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4">
      <div className="flex items-center gap-1 p-1.5 bg-white/70 border border-gray-100 backdrop-blur-xl rounded-2xl shadow-sm">
        {navigationItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="px-5 py-2 rounded-xl text-sm font-bold text-gray-400 hover:text-black hover:bg-gray-50 transition-all"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
