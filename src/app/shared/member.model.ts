export interface Member {
  name: string;
  generation?: number;
  spouse?: Member[];
  children?: Member[];
  showChildren?: boolean;
}
