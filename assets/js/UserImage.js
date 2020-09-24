class UserImage{
    constructor(user){
        this._user = user;
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

    render() {
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
}

export default UserImage;
