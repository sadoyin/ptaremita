"use client"

import { useState } from "react"
import Navbar from "./navbar"
import MenuServer from "./menuServer"

export default function AppShell({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false)
  
    return (
      <>
        <Navbar onToggle={() => setOpen(true)} />
        <MenuServer  open={open} onClose={() => setOpen(false)} />
  
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40 z-30 md:hidden"
          ></div>
        )}
  
        <main className="pt-16 md:ml-64 p-4 transition-all">
          {children}
        </main>
      </>
    )
  }