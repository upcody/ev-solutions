'use client';

import { Provider } from 'react-redux';
import store from './index';

export const Providers = ({ children }: any) => {
    return <Provider store={store}>{children}</Provider>;
};
