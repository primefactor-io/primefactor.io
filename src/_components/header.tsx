export default function ({ name, comp }: Lume.Data) {
  return (
    <header className="flex">
      <a
        href="/"
        className="hover:text-indigo-400 transition-colors duration-200 font-extrabold"
      >
        {name}
      </a>
      <div className="ml-auto">
        <comp.navigation />
      </div>
    </header>
  );
}
