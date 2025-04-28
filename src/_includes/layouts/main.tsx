export const title = "Default Main Title";
export const language = "en";

export default function ({ title, language, children, comp }: Lume.Data) {
  return (
    <html lang={language}>
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </head>
      <body>
        <comp.Header />
        <main>
          {children}
        </main>
        <comp.Footer />
      </body>
    </html>
  );
}
