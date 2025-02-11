export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md hidden md:block">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a 
            href="#" 
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            Privacy Policy
          </a>
          <a 
            href="#" 
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            Terms of Service
          </a>
          <a 
            href="#" 
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
