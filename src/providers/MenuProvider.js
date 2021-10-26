import React, { createContext, useState } from 'react';

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
    const [isActive, setActive] = useState(false);

    const handleOpenMenu = () => setActive(true);
    const handleCloseMenu = () => setActive(false);
    const toggleMenu = () => setActive(!isActive);

    return <MenuContext.Provider value={{ handleOpenMenu, handleCloseMenu, toggleMenu, isActive }}>{children}</MenuContext.Provider>;
};

export { MenuProvider, MenuContext };
