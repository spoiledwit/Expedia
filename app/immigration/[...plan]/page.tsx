import DiscoverImmigrationOptions from "@/components/Immigration/DiscoverOptions";
import Hero from "@/components/Immigration/Hero";
import ImmigrationPlans from "@/components/Immigration/ImmigrationPlans";
import { CountryData, PlanData } from "@/types";
import immigrationData from "@/content/immigration-data.json";
import { Metadata } from "next";
import { totTitleCase } from "@/lib/utils";

type Props = {
  params: { plan: [string, string | undefined] };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const [country, plan] = params.plan;
  let title: string;
  if (plan) {
    title = `${totTitleCase(plan)} | ${totTitleCase(
      country
    )} | Centennial Migration`;
  } else {
    title = `${totTitleCase(country)} | Centennial Migration`;
  }

  return {
    title,
    description: `${plan} plan for ${country} by Centennial Migration`,
  };
}

const ImmigrationPage = ({ params }: Props) => {
  const [country, plan] = params.plan;
  //   @ts-ignore
  const countryData = immigrationData[country] as CountryData;
  let planData: PlanData | undefined = undefined;

  if (plan) {
    planData = countryData.plans.values.find((p) => p.id === plan) as PlanData;
  }

  const optionsData = {
    slogan: planData?.description.slogan || countryData.description.slogan,
    title: planData?.description.title || countryData.description.title,
    html: planData?.description.html || countryData.description.html,
  };

  return (
    <div className="flex flex-col gap-20 mb-40">
      <Hero {...countryData.hero} />
      <DiscoverImmigrationOptions {...optionsData} />
      <ImmigrationPlans countryData={countryData} />
    </div>
  );
};

export default ImmigrationPage;
