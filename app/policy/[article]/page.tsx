import policies from "@/content/policies.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Centennial Migration",
  description:
    "Centennial Migration are among the best visa consultancies in UAE, and India, with affordable prices, high success rates, and hassle-free immigration services.",
};


const PolicyPage = ({ params }: { params: { article: string } }) => {
  // @ts-ignore
  const html = policies[params.article];

  return (
    <main className="w-full my-40 px-4 md:px-40 xl:px-80">
      <article
        className="md:prose-xl text-gray-700 prose-h1:text-primary-blue prose-h2:text-primary-blue prose-h3:text-primary-blue prose-lg"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
};

export default PolicyPage;
