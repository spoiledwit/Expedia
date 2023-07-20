import DiscoverImmigrationOptions from "../components/Immigration/DiscoverOptions";
import Hero from "../components/Immigration/Hero";
import ImmigrationPlans from "../components/Immigration/ImmigrationPlans";
import { useParams } from "react-router-dom";
import immigrationData from "../static/immigration-data.json";
import { CountryData, PlanData } from "../types";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const ImmigrationPage = () => {
  const { country, plan } = useParams();
  const countryName = country as string;
  // @ts-ignore
  const countryData = immigrationData[countryName] as CountryData;
  let planData: PlanData | undefined = undefined;
  if (plan) {
    planData = countryData.plans.values.find((p) => p.id === plan) as PlanData;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [country, plan]);

  const optionsData = {
    slogan: planData?.description.slogan || countryData.description.slogan,
    title: planData?.description.title || countryData.description.title,
    html: planData?.description.html || countryData.description.html,
  };

  return (
    <div className="flex flex-col gap-20 mb-40">
         <Helmet>
        <title>{countryData.name.toUpperCase()} | CentenniaImmigration</title>
        <meta name="description" content="Home | CentenniaImmigration" />
      </Helmet>
      <Hero {...countryData.hero} />
      <DiscoverImmigrationOptions {...optionsData} />
      <ImmigrationPlans countryData={countryData} />
    </div>
  );
};

export default ImmigrationPage;
