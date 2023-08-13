export interface sectionType {
  content: string;
  data?: contentsType[];
}

export interface contentsType {
  id: number;
  since: string;
  title: string;
  list: Array<string>;
  img?: string;
}