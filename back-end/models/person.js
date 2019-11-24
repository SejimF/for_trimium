db = require('../utils/database');


console.log(db);


module.exports = class Person {
    constructor(id, active, name, lastName, email, xml_id, gender, birthday, position, region, city) {
        this.id         = id;
        this.active     = active;
        this.name       = name;
        this.lastName   = lastName;
        this.email      = email;
        this.xml_id     = xml_id;
        this.gender     = gender;
        this.birthday    = birthday;
        this.position   = position;
        this.region     = region;
        this.city       = city;
    }

    save() {
        return db.execute(
            'INSERT INTO test (active, name, lastName, email, xml_id, gender, birthday, position, region, city) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [   this.id,      
                this.active,  
                this.name,    
                this.lastName,
                this.email,   
                this.xml_id,  
                this.gender,
                this.birthday,
                this.position,
                this.region,
                this.city    ]
        );
    }
}