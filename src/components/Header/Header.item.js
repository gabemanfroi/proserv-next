export const HeaderItem = ({ href, text }) => {
  return (
    <li>
      <a
        href={href}
        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-amber-400 md:p-0 dark:text-white    md:dark:hover:bg-transparent"
        aria-current="page"
      >
        {text}
      </a>
    </li>
  );
};
