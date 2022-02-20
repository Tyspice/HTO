import { ReactElement } from 'React';



export interface ListData {
  label: string;
  value: string;
}

export interface Setting {
  title: string;
  input?: () => ReactElement;
}