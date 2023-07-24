import { useParams } from "react-router-dom";
import policies from "../static/policies.json";
import { useEffect } from "react";



const PolicyPage = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
  }, [])

  const { article } = useParams();
  // @ts-ignore
  const html = policies[article];

  return (
    <main className="w-full my-40 px-4 md:px-40 xl:px-80">
      <article className="md:prose-xl text-gray-700 prose-h1:text-primary-blue prose-h2:text-primary-blue prose-h3:text-primary-blue prose-lg" dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
};

export default PolicyPage;
