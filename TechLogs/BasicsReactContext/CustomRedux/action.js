import { theme } from './store';

export const toggleUserLoggedInState = (loggedInState) => {
    return theme.userLoggedIn = loggedInState;
};
