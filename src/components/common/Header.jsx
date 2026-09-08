const Header = () => {
  return (
    <header className="fixed top-5 right-0 left-0 z-50 backdrop-blur-md bg-black/20 max-w-3xl mx-auto  border rounded-lg shadow-xl border-gray-200/10 ">
      <nav className="max-w-7xl mx-auto px-6 py-4" dir="rtl">
        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-8">
            <li>
              <a
                href="/"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                خانه
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                درباره ما
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                خدمات
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                تماس با ما
              </a>
            </li>
          </ul>
          <div className="text-xl font-bold text-gray-900 dark:text-white">
            لوگو
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
