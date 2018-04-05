const cookie = require('js-cookie');

const setCookie = (key, value, exp = 1) => {
    if (process.browser) {
        cookie.set(key, value, {
            expires: exp,
            path: "/"
        });
    }
};

const removeCookie = key => {
    if (process.browser) {
        cookie.remove(key, {
            expires: 1
        });
    }
};

const getCookie = (key, req) => {
    return process.browser
        ? getCookieFromBrowser(key)
        : getCookieFromServer(key, req);
};

const getCookieFromBrowser = key => {
    return cookie.get(key);
};

const getCookieFromServer = (key, req) => {
    if (!req.headers.cookie) {
        return undefined;
    }
    const rawCookie = req.headers.cookie
        .split(";")
        .find(c => c.trim().startsWith(`${key}=`));
    if (!rawCookie) {
        return undefined;
    }
    return rawCookie.split("=")[1];
};

module.exports = {
    setCookie,
    removeCookie,
    getCookie,
    getCookieFromServer,
    getCookieFromBrowser
}