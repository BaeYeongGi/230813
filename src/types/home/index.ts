export interface sectionType {
  content: string;
  projectData?: jsonDataType[];
  viewProjectImage?: React.MouseEventHandler<HTMLButtonElement> | any;
  legacyData?: jsonDataType[];
}


export interface jsonDataType {
  id: number;
  since?: string;
  title: string;
  list: Array<string>;
  img?: string;
}

export interface imgType {
  content: string;
  closeImg: React.MouseEventHandler<HTMLDivElement>;
  projectData?: jsonDataType[];
}