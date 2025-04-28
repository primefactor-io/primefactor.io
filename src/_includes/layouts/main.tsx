export const title = "Default Main Title";
export const description = "Default Main Description";
export const language = "en";

export default function ({ title, language, children, comp }: Lume.Data) {
  return (
    <html lang={language}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" type="text/css" href="/styles.css" />
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
