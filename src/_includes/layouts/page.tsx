export const title = "Default Page Title";
export const description = "Default Page Description";
export const language = "en";
export const layout = "layouts/main.tsx";

export default function ({ title, language, url, children }: Lume.Data) {
  return (
    <section lang={language}>
      {url !== "/" && title &&
        (
          <header>
            <h1>{title}</h1>
          </header>
        )}
      {children}
    </section>
  );
}
