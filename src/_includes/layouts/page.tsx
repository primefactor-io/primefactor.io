export const title = "Default Page Title";
export const language = "en";
export const layout = "layouts/main.tsx";

export default function ({ title, language, children }: Lume.Data) {
  return (
    <section lang={language}>
      <header>
        <h1>{title}</h1>
      </header>
      {children}
    </section>
  );
}
