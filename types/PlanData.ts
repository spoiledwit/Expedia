type PlanData = {
  id: string;
  name: string;
  imageURL: string;
  subtitle: string;
  description: {
    title: string;
    slogan: string;
    html: string;
  };
};

export default PlanData;
