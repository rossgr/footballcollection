const Footer = () => (
  <footer className='text-gray-400 w-full  bg-gray-200 dark:bg-gray-900 body-font'>
    <div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
      <a
        href='/'
        className='flex title-font font-medium items-center md:justify-start justify-center text-white'
      >
        <span className='ml-3 text-xl text-gray-800 dark:text-gray-300'>
          Football Collection
        </span>
      </a>
      <p className='text-sm text-gray-700 dark:text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4'>
        © 2021 Football Collection —
        <a
          href='https://github.com/rossgr'
          className='text-gray-500 ml-1'
          target='_blank'
          rel='noopener noreferrer'
        >
          @rossgr
        </a>
      </p>
      <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
        <a
          href='https://twitter.com/rossgrDEV'
          className='ml-3 text-gray-600 dark:text-gray-400 '
        >
          <svg
            fill='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            className='w-5 h-5'
            viewBox='0 0 24 24'
          >
            <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
          </svg>
        </a>
      </span>
    </div>
  </footer>
)

export default Footer
