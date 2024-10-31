export interface jobItem {
  company: string;
  title: string;
  dateRange: string; // "Jan 2019 - Present" or similar
}

// note: 1 level of dropdown is supported
const workData: jobItem[] = [
  {
    company: "BusPilot",
    title: "CEO",
    dateRange: "2022 - Present",
  },
  {
    company: "Westlake Web Designs",
    title: "CEO",
    dateRange: "2024 - Present",
  },
  {
    company: "SWE Intern",
    title: "N2TP Solutions",
    dateRange: "2023",
  },
  {
    company: "Code Works Company",
    title: "Team Manager",
    dateRange: "2023 - 2024",
  },
];

export default workData;
