export default function ({ nav }: Lume.Data) {
  const items = nav.menu("/", "type=page").children;

  return (
    <>
      {items && items.length > 0 && (
        <nav>
          <ul>
            {items.map((item) => (
              <li key={item.data.url}>
                <a href={item.data.url}>{item.data.navigation}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
