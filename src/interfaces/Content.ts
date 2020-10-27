import { Project } from "./Project";

export interface Content {
  id: string;
  title: string;
  description: string;
  projects?: Project[];
  skill_list?: string[];
}
