import React, { useContext } from 'react';
import { NotificationContext } from 'providers/NotificationProvider';
import { NotificationWrapper } from './Notification.styles';

const Notification = () => {
    const { notification } = useContext(NotificationContext);
    return <NotificationWrapper>{notification}</NotificationWrapper>;
};

export default Notification;
