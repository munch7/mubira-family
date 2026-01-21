export interface Member {
  id?: string;
  name: string;
  email?: string;
  phone?: string;
  occupation?: string;
  residence?: string;
  birthDate?: string;
  gender?: string;
  relationshipStatus?: string;
  profilePictureUrl?: string;
  bio?: string;
  generation?: number;
  spouse?: Member[];
  children?: Member[];
  showChildren?: boolean;
  showSpouse?: boolean;
  parents?: Member[];
  isHighlighted?: boolean;
  isVisible?: boolean;
}
