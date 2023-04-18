import React, { StrictMode } from 'react';
import Router from '@router';
import { store } from '@store';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ErrorsHandlerProvider } from '@context';
import { ConnectionHandler, ErrorBoundary } from '@containers';

const app = document.getElementById('app');
const root = app ? createRoot(app) : null;

root
  ? root.render(
      <StrictMode>
        <ErrorBoundary>
          <ConnectionHandler>
            <Provider store={store}>
              <ErrorsHandlerProvider>
                <BrowserRouter>
                  <Router />
                </BrowserRouter>
              </ErrorsHandlerProvider>
            </Provider>
          </ConnectionHandler>
        </ErrorBoundary>
      </StrictMode>
    )
  : null;
