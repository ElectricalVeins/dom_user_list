/**
 * @param {object} user
 * @param {integer} user.id
 * @param {string} user.firstName
 * @param {string} user.lastName
 * @param {string} user.profilePicture
 * @returns {User}
 */
class User {
    constructor({ id, firstName, lastName, profilePicture }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.imgSrc = profilePicture;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

export default User;
