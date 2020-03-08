export const login = (user) => {
    const myHours = new Date();
    const currentDate = new Date(Date.now());
    myHours.setMinutes(currentDate.getMinutes() + 2);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('expirationTime', myHours);
    return {
        type: 'LOGIN',
        payload: user
    };
}

export const getUsers = (data) => {
    return {
        type: 'ALL_USERS',
        payload: data
    }
}

export const logout = () => {
    localStorage.removeItem('user');
}