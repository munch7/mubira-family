export interface FirestoreMember {
    id: string; // Document ID
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

    // Normalized relationships (IDs pointing to other docs)
    spouseIds?: string[];
    childrenIds?: string[];
    parentIds?: string[];
}
