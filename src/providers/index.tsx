import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { store } from './storeConfig';

interface IProps extends React.HTMLAttributes<HTMLDivElement> { }

const StoreProvider: React.FC<IProps> = ({ children }: IProps): JSX.Element => {
    return (
        <Provider store={store}>{children}</Provider>
    );
};

export default StoreProvider;
