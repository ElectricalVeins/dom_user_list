import User from './User.js';
import UserImage from './UserImage.js';

class UserCard {
    constructor(user) {
        if (user instanceof User) {
            this._user = user;
            this._image = new UserImage(user);
        } else {
            throw new TypeError('user must be an instance of User')
        }
        return this.render();
    }

    createUserInformation() {
        const container = document.createElement('div');
        container.classList.add('userCardInfo');

        const userName = document.createElement('h2');
        userName.textContent = this._user.fullName.trim() || 'Anonymous';

        const userPosition = document.createElement('p');
        userPosition.textContent = 'Position';

        container.append(userName, userPosition);
        return container;
    }

    createUserButton() {
        const btn = document.createElement('button');
        btn.classList.add('contactButton');
        btn.textContent = 'Connect';
        return btn
    }

    render() {
        const card = document.createElement('article');
        card.classList.add('userCard');
        card.append(this._image.render(), this.createUserInformation(), this.createUserButton());
        return card
    }

}

export default UserCard;
