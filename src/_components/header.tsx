export default function ({ name, comp }: Lume.Data) {
  return (
    <header>
      <a href="/">{name}</a>
      <comp.navigation />
    </header>
  );
}
