export interface ProjectItem {
  image: ImageMetadata; // an imported image
  title: string;
  description: string;
  href: URL;
}

// images
import CosmicThemes from "@images/projects/cosmic-themes.png";
import WWD from "@images/projects/wwd-pre.png";
import Stellar from "@images/projects/stellar.png";
import TheVoid from "@images/projects/the-void.png";
import BusPilot from "@images/projects/buspilot.png";
import CodersUniversity from "@images/projects/codersuniversity.png";

export const projectData: ProjectItem[] = [
  {
    image: BusPilot,
    title: "BusPilot",
    description: `A school transportation software designed to optimize bus routes and enhance student safety. Currently implemented in leading international schools in Hanoi.
    `,
    href: new URL("https://www.buspilot.app/"),
  },
  {
    image: WWD,
    title: "Westlake Web Designs",
    description: `An online web design agency building websites and online systems that help businesses drive growth. Tailored solutions for each client’s unique needs.
    `,
    href: new URL("https://www.westlakewebdesign.com/"),
  },
  {
    image: CodersUniversity,
    title: "Coder's University",
    description: `A cool online coding bootcamp teaching students real-world programming skills. Wanna learn coding? Click here:
    `,
    href: new URL("https://www.joincodersuniversity.com/"),
  },
  // {
  //   image: TheVoid,
  //   title: "DAU Records",
  //   description: `An independent label with a mission to revive jazz by discovering and promoting emerging talent. We aim to bring fresh, innovative sounds to the genre while honoring its rich legacy.
  //   `,
  //   href: new URL("https://cosmicthemes.com/themes/the-void/"),
  // },
];

export default projectData;
