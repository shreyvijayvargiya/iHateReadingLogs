import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../Redux/store';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const AllProviders = ({ children })=> {
    return (
        <Provider store={store}>
            <DndProvider backend={HTML5Backend}>
                {children}
            </DndProvider>
        </Provider>
    );
};

const customRender = (ui, options) => render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
