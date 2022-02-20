import { ReactElement } from "React";

export interface ListData {
  label: string;
  value?: string; //remove the optional value when using real data
}

export interface Setting {
  title: string;
  input?: () => ReactElement;
}

export interface State {
  off: "off";
  circulate: "circulate";
  heat: "heat";
}
