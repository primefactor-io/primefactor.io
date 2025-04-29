export default function ({ nav }: Lume.Data) {
  const items = nav.menu("/", "type=page").children;

  return (
    <>
      {items && items.length > 0 && (
        <nav>
          <ul className="flex space-x-4">
            {items.map((item) => (
              <li
                key={item.data.url}
                className="hover:text-indigo-400 transition-colors duration-200"
              >
                <a href={item.data.url}>{item.data.navigation}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
