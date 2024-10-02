import { useState, useEffect } from 'react'
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Button } from './ui/button'
import { Menu, Moon, Sun } from 'lucide-react'


export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    setDarkMode(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))
  }, [])

  const toggleTheme = () => {
    if(!darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }

    setDarkMode(!darkMode)
  }

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-50">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">Home</a>
        <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">About</a>
        <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">Blog</a>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden"
          >
            <Menu className="h-5 w-5"></Menu>
            <span className="sr-only">Toggle Navigation Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <a href="#" className="text-muted-foreground hover:text-foreground">Home</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">About</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Blog</a>
          </nav>
        </SheetContent>
      </Sheet>

      <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <Button variant="secondary" size="icon" className='rounded-full' onClick={toggleTheme}>
          {darkMode ? (
            <Moon className='h-4 w-4' />
          ) : (
            <Sun className='h-4 w-4' />
          )}
        </Button>
      </div>
    </header>
  )
}