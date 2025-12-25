import { Menu } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="w-full h-14 bg-white shadow flex items-center px-4 justify-between fixed top-0 left-0 z-40">
      <h1 className="font-bold text-xl">School Portal</h1>
      <button className="md:hidden" aria-label="Open menu">
        <Menu className="w-6 h-6 cursor-pointer" />
      </button>
    </nav>
  )
}