export default function ({ comp }: Lume.Data) {
  return (
    <header>
      <a href="/">[Name]</a>
      <comp.navigation />
    </header>
  );
}
