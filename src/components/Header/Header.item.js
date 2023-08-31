export const HeaderItem = ({ href, text }) => {
  return (
    <li>
      <a
        href={href}
        className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:border-0 hover:text-amber-400 md:p-0 text-white md:hover:bg-transparent"
        aria-current="page"
      >
        {text}
      </a>
    </li>
  );
};
