export interface Content {
  id: string;
  title: string;
  description: string;
  projects?: object[];
  skill_list?: string[];
  form?: React.FC;
}
