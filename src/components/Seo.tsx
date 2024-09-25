import { Helmet } from "react-helmet-async";

export default function Seo({
  title,
  content,
}: {
  title?: string;
  content?: string;
}) {
  return (
    <Helmet>
      <title>{title ?? "Welcome"} | Open Desk Consult Limited</title>
      <meta
        name="description"
        content={content ?? "Welcome to Open Desk Consult Limited"}
      ></meta>
    </Helmet>
  );
}
