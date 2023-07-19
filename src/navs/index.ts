export const navLinks = [
  {
    id: "home",
    title: "Home",
    href: "/",
  },
  {
    id: "about",
    title: "About Us",
    href: "/about-us",
  },
  {
    id: "australia",
    title: "Australia",
    href: "/immigration/australia",
    children: [
      {
        id: "visit-visa",
        title: "Visit Visa",
        href: "/immigration/australia/visit-visa",
      },
      {
        id:"work-permit",
        title: "Work Permit",
        href:"/immigration/australia/work-permit"
      },
      {
        id:"Subclass-189",
        title: "Subclass 189",
        href:"/immigration/australia/subclass-189"
      },
      {
        id:"Subclass-491",
        title: "Subclass 491",
        href:"/immigration/australia/subclass-491"
      }
    ],
  },
  {
    id: "uk",
    title: "UK",
    href: "/immigration/uk",
    children: [
      {
        id: "work-permit",
        title: "Work Permit",
        href: "/immigration/uk/work-permit",
      },
      {
        id: "visit-visa",
        title: "Visit Visa",
        href:"immigration/uk/visit-visa"
      },
      {
        id: "Investor",
        title: "Investor",
        href:"immigration/uk/investor"
      }
    ],
  },
  {
    id: "europe",
    title: "Europe",
    href: "/immigration/europe",
    children: [
     
      {
        id: "malta",
        title: "Malta",
        href: "immigration/malta",
      },
     
      {
        id: "finland",
        title: "Finland",
        href: "immigration/finland",
      },
      {
        id: "poland",
        title: "Poland",
        href: "immigration/poland",
      },
      {
        id: "lithuania",
        title: "Lithuania",
        href: "immigration/lithuania",
      },
    ],
  },
  {
    id: "newzealand",
    title: "New Zealand",
    href:"immigration/newzealand",
  },
  {
    id: "contact",
    title: "Contact Us",
    href: "/contact",
  },
];

export { default as adminNav } from "./admin";