// deno-lint-ignore-file no-explicit-any

export const title = null;
export const url = "/";
export const navigation = "Home";

export default function ({ name, description, socials }: Lume.Data) {
  const github = socials.find((item: any) => item.name === "GitHub");

  return (
    <div>
      <hgroup>
        <h1>{name}</h1>
        <p role="doc-subtitle">{description}</p>
      </hgroup>
      <div>
        <a href={github.url}>Explore Projects</a>
      </div>
    </div>
  );
}
