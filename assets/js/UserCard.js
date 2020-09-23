import User from './User.js';

class UserCard {
    constructor(user) {
        if (user instanceof User) {
            this._user = user;
        } else {
            throw new TypeError('user must be an instance of User')
        }
        return this.render();
    }

    imageErrorHandler(event) {
        event.target.remove();
    }

    createBackgroundColor() {
        //thanks stack overflow
        function hashCode(str) { // java String#hashCode
            var hash = 0;
            for (var i = 0; i < str.length; i++) {
                hash = str.charCodeAt(i) + ((hash << 5) - hash);
            }
            return hash;
        }

        function intToRGB(i) {
            var c = (i & 0x00FFFFFF)
                .toString(16)
                .toUpperCase();

            return "00000".substring(0, 6 - c.length) + c;
        }
        return `#${intToRGB(hashCode(this._user.fullName))}`;
    }

    createUserInitials() {
        const initials = document.createElement('span');
        initials.classList.add('userInitials');
        initials.textContent = this._user.fullName
            .split(' ')
            .map(word => word.charAt(0))
            .join('')
            || 'A';

        return initials;
    }

    createUserImage() {
        const container = document.createElement('div');
        container.classList.add('userImageWrapper');
        container.style.backgroundColor = this.createBackgroundColor() || 'green';

        const img = document.createElement('img');
        img.classList.add('userImage');
        img.src = this._user.imgSrc;
        img.addEventListener('error', this.imageErrorHandler)

        container.append(this.createUserInitials(), img);

        return container
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
        card.append(this.createUserImage(), this.createUserInformation(), this.createUserButton());
        return card
    }

}

export default UserCard;
