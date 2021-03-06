import { IconType } from "react-icons";
export interface Service {
  Icon: IconType;
  title: string;
  about: string;
}

export interface Skill {
  Icon: IconType;
  name: string;
  level: string;
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  image_path: string;
  deployed_url: string | null;
  github_url: string;
  category: string[];
  key_techs: string[];
}

export interface Experience {
  company: string;
  position: string;
  start_date: string;
  end_date: string;
  description: string;
  key_techs: string[];
}

export interface Education {
  school: string;
  degree: string;
  passing_year: string;
  description: string;
}
