export const title = "Index Page";
export const description = "Index Page Description";
export const url = "/";
export const navigation = "Home";

export default function () {
  return (
    <>
      <p>Index Page Body.</p>
      <a href="/about/">Internal Link</a>
      <a href="https://example.com">External Link</a>
    </>
  );
}
