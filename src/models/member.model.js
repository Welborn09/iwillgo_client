/*
    CREATED AND WRITTEN BY STEVE WELBORN
*/

export class Member {
    id;
    firstname;
    lastname;
    email;
    confirm;
    password;

    constructor(id, firstname, lastname, email, confirm) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.confirm = confirm;
    }

    static fromJSON(json) {
        return new Member(json.id, json.firstname, json.lastname, json.email, json.confirm);
    }

    toJSON() {
        return {
          id: this.id,
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          confirm: this.confirm,
          password: this.password,
        };
      }
}

