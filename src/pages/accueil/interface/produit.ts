export interface Categorie {
    _id?: string;
    designationCategorie: string;
}

export interface Produit {
    _id?: string;
    nomProduit: string;
    prix: number;
    categorieId?: string;
    description?: string;
    pathImage?: any;
}