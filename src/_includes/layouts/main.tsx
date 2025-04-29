export const title = "Default Main Title";
export const description = "Default Main Description";
export const language = "en";

export default function (
  { name, title, language, url, domain, children, comp }: Lume.Data,
) {
  return (
    <html lang={language}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={String(new URL(url, domain))} />
        <link rel="stylesheet" type="text/css" href="/styles.css" />
        <title>{title ? `${title} - ${name}` : name}</title>
      </head>
      <body className="text-white bg-slate-900 antialiased overflow-hidden">
        <main className="w-full max-w-5xl mx-auto px-4 py-6">
          {url !== "/" && <comp.Header />}
          {children}
        </main>
        <div className="absolute text-slate-500 text-xs w-full bottom-0 text-center p-6">
          <comp.Footer />
        </div>
      </body>
    </html>
  );
}
