export default function () {
  return (
    <div tw="flex flex-col items-center justify-center w-full h-full text-white bg-slate-900 antialiased">
      <h1
        // TODO: Add `font-extrabold` and replace individual styles with Tailwind CSS classes.
        tw="text-9xl text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #818cf8, #e0e7ff, #38bdf8, #e879f9)",
          backgroundClip: "text",
        }}
      >
        Primefactor
      </h1>
      <p // TODO: Add `font-medium`.
       tw="text-4xl">
        Cryptography Research and Development Lab
      </p>
    </div>
  );
}
