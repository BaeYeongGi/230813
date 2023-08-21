export interface sectionType {
  content: string;
  projectData?: jsonDataType[];
  viewProjectImage?: React.MouseEventHandler<HTMLButtonElement> | any;
  legacyData?: jsonDataType[];
  data?: secionDataType;
}

export interface secionDataType {
  project: jsonDataType[];
  tech: jsonDataType[];
  legacy: jsonDataType[];
}

export interface jsonDataType {
  id: number;
  since?: string;
  title: string;
  list?: Array<string>;
  img?: string;
  text?: string;
}

export interface imgType {
  content: string;
  closeImg: React.MouseEventHandler<HTMLDivElement>;
  data?: secionDataType;
}