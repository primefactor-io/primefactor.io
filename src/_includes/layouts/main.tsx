export const title = "Default Main Title";
export const description = "Default Main Description";
export const language = "en";

export default function (
  { name, title, language, url, domain, children, comp }: Lume.Data,
) {
  const isIndexPage = url === "/";

  return (
    <html lang={language}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={String(new URL(url, domain))} />
        <link rel="stylesheet" type="text/css" href="/styles.css" />
        <title>{title ? `${title} - ${name}` : name}</title>
      </head>
      <body className="text-white bg-slate-900 antialiased">
        <main className="flex flex-col max-w-5xl min-h-screen mx-auto p-4">
          {!isIndexPage && <comp.Header />}
          <div
            className={`grow ${
              isIndexPage ? "content-center text-center" : ""
            }`}
          >
            {children}
          </div>
          <div className="text-slate-500 text-xs text-center">
            <comp.Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
