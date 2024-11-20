export interface LinkProps {
  text: string;
  href: LinkPaths;
}

export enum LinkPaths {
  Home = "/",
  Projects = "/projects",
  AboutUs = "/about",
  RedirectTax = "/redirect-tax",
  Statut = "https://drive.google.com/file/d/1Wx4yRM_A6Izm5tntvfalwEMRjL1nmPmr/view",
  JoinUs = "/join",
}

export const Links: LinkProps[] = [
  { text: "Proiecte", href: LinkPaths.Projects },
  { text: "Despre noi", href: LinkPaths.AboutUs },
  { text: "Redirectioneaza 3.5%", href: LinkPaths.RedirectTax },
];

