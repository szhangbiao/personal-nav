'use client'

import { useTheme } from '@/context/ThemeContext'
import { Button } from '../ui/Button'

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Logo</h1>
        <Button
          onClick={toggleTheme}
          variant="ghost"
          className="w-10 h-10 p-0 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <span className="material-icons text-2xl">
            {theme === 'light' ? 'dark_mode' : 'light_mode'}
          </span>
        </Button>
      </div>
    </header>
  )
}
