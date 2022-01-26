class User{
    constructor(username, nom, prenom, description, phone,
                adresse, postal, city, country, email, password, cardNum, expireDate, cvv){
        this.username = username;
        this.nom = nom;
        this.prenom = prenom;
        this.description = description;
        this.phone = phone;
        this.adresse = adresse;
        this.postal = postal;
        this.city  = city;
        this.country  = country;
        this.email  = email;
        this.password  = password;
        this.cardNum = cardNum;
        this.expireDate= expireDate;
        this.cvv = cvv;
    };

    getUsername(){ return this.username;    }
    getNom(){ return this.nom;  }
    getPrenom(){ return this.prenom;  }
    getPhone(){ return this.phone;  }
    getDesc(){ return this.description; }
    getEmail(){ return this.email; }
    getPassword(){ return this.password; }
    getCountry(){ return this.country; }
    getCity(){ return this.city; }
    getPostal(){ return this.postal; }
    getAdresse(){ return this.adresse; }
}

class UserProfil extends User{
    constructor(username, nom, prenom, description, phone,
                adresse, postal, city, country, email, password,cardNum, expireDate, cvv){
        super(username, nom, prenom, description, phone,
            adresse, postal, city, country, email, password,cardNum, expireDate, cvv);
        this.admin = false;
    }
}

class AdminProfil extends User{
    constructor(username, nom, prenom, description, phone,
                adresse, postal, city, country, email, password){
        super(username, nom, prenom, description, phone,
            adresse, postal, city, country, email, password,"","","");
        this.admin = true;
    }
}