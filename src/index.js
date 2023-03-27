import React, { StrictMode } from 'react';
import Router from '@router';
import { store } from '@store';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ErrorsHandlerProvider } from '@context';

const app = document.getElementById('app');
const root = app ? createRoot(app) : null;

root
  ? root.render(
      <StrictMode>
        <Provider store={store}>
          <ErrorsHandlerProvider>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </ErrorsHandlerProvider>
        </Provider>
      </StrictMode>
    )
  : null;
