export class pharmacien {
    
    /*informations personelles */

    id!: string;

    imgProfileUrl!: string;
        
    nom!: string;
    prenom!: string;

    email!: string;
    telephone!: number;

    motdepasse!: string;
    motdepasseconfirm!: string;

    dateDenaissance!: Date;
    nationalité! : string;

    genre!: string;

    /*informations professionelles */

    NumImat! : string;
    dateDebutCarriere! : string;

    DiplomeUrl! : string
    AutorisationUrl! : string;
 }
