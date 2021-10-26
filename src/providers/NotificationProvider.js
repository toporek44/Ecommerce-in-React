import React, { useCallback, useState } from 'react';

export const NotificationContext = React.createContext('');

export const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = useState('');
    const dispatchNotification = useCallback((message) => {
        setNotification(message);

        setTimeout(() => {
            setNotification('');
        }, 7000);
    }, []);

    return <NotificationContext.Provider value={{ notification, dispatchNotification }}>{children}</NotificationContext.Provider>;
};
