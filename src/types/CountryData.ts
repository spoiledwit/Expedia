type CountryData = {
  name: string;
  hero: {
    title: string;
    description: string;
    imageURL: string;
  };
  options: {
    title: string;
    descriptionHTML: string;
    slogan: string;
  };
  plans: {
    title: string;
    description: string;
    values: {
      id: string;
      name: string;
      imageURL: string;
      description: string;
    }[];
  };
};

export default CountryData;
