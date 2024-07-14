/*
    CREATED AND WRITTEN BY STEVE WELBORN
*/

export class RegisterMember {
    id;
    firstname;
    lastname;
    email;
    password;

    constructor(id, firstname, lastname, email) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
    }

    toJSON() {
        return {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password,          
        };
      }
}

