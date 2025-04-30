// deno-lint-ignore-file no-explicit-any

export const title = null;
export const url = "/";
export const navigation = "Home";

export default function ({ name, description, socials }: Lume.Data) {
  const github = socials.find((item: any) => item.name === "GitHub");

  return (
    <>
      <hgroup>
        <h1 className="
          text-6xl
          md:text-9xl
          font-extrabold
          text-transparent
          bg-clip-text
          bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
          bg-[length:200%_auto]
          animate-gradient
        ">
          {name}
        </h1>
        <p
          role="doc-subtitle"
          className="my-8 text-xl md:text-4xl font-medium"
        >
          {description}
        </p>
      </hgroup>
      <div className="my-2">
        <a
          href={github.url}
          className="
            bg-indigo-600
            p-4
            font-bold
            rounded
            shadow
            transition-colors
            duration-300
            ease-in-out
            hover:bg-indigo-200
            hover:text-indigo-800
        "
        >
          Explore Projects
        </a>
      </div>
    </>
  );
}
