export const validateStrings = (...args) => {
    for (let i = 0; i < args.length; i++) {
        if (args[i] === null || args[i] === undefined || args[i].length === 0) {
            return false;
        }
    }
    return true;
}

export const validateEmail = (email) => {
    // eslint-disable-next-line no-useless-escape
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email.trim());
}