import React from 'react'
import { ThemeContext } from '../../hooks/useDarkMode'

const ThemeToggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext)
  return (
    <div className='transition duration-500 ease-in-out rounded-full p-2'>
      {theme === 'dark' ? (
        <span
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className='mx-2 py-1 text-sm  transition-colors duration-200 text-gray-400 hover:text-gray-600 transform rounded dark:text-gray-200 hover:bg-gray-700 dark:hover:text-gray-300 md:mx-2'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
            />
          </svg>
        </span>
      ) : (
        <span
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className='mx-2 py-1 text-sm  transition-colors duration-200 text-gray-400 hover:text-gray-600 transform rounded dark:text-gray-200 hover:bg-gray-700 hover:text-gray-100 md:mx-2'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
            />
          </svg>
        </span>
      )}
    </div>
  )
}

export default ThemeToggle
