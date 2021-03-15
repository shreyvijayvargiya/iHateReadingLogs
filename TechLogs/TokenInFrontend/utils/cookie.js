export const setCookie = (cookieName, cookieVal, days = 14) => {
    const date = new Date();
    const expires =
      '; expires=' +
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000).toLocaleString();
  
    document.cookie = cookieName + '=' + (cookieVal || '') + expires + '; path=/';
  };
  
  export const getCookie = (cookieName) => {
    const searchName = cookieName + '=';
    const allCookies = document.cookie.split(';');
  
    for (let i = 0; i < allCookies.length; i++) {
      let cookie = allCookies[i];
      while (cookie.charAt(0) === ' ')
        cookie = cookie.substring(1, cookie.length);
      if (cookie.indexOf(searchName) === 0) {
        return cookie.substring(searchName.length, cookie.length);
      }
    }
    return undefined;
  };
  
  export const removeCookie = (cookieName) => {
    document.cookie =
      cookieName + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  };