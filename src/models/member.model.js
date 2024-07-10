/*
    CREATED AND WRITTEN BY STEVE WELBORN
*/

export class Member {
    id;
    firstname;
    lastname;
    email;
    city;
    state;
    zip;
    confirm;
    password;

    constructor(id, firstname, lastname, email, confirm) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.confirm = confirm;
        this.city = '',
        this.state = '';
        this.zip = '';
    }

    static fromJSON(json) {
        return new Member(json.id, json.firstname, json.lastname, json.email, json.city, json.state, json.zip, json.confirm);
    }

    toJSON() {
        return {
          id: this.id,
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          city: this.city,
          state: this.state,
          zip: this.zip,
          confirm: this.confirm,
          password: this.password,          
        };
      }
}

