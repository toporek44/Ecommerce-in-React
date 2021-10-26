import React, { createContext, useState } from 'react';

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
    const [isModalActive, setModalActive] = useState(false);

    const handleOpenModal = () => setModalActive(true);
    const handleCloseModal = () => setModalActive(false);

    return <ModalContext.Provider value={{ handleCloseModal, handleOpenModal, isModalActive }}>{children}</ModalContext.Provider>;
};

export { ModalProvider, ModalContext };
