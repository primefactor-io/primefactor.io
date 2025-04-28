export default function ({ name }: Lume.Data) {
  return (
    <footer>
      Copyright © {new Date().getFullYear()} {name} | All rights reserved.
    </footer>
  );
}
