import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import queryString from 'query-string';

import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from '~/components/GlobalStyles';
import '~/assets/css/Grid.css';
import '~/assets/css/GlobalClasses.css';
import ScrollToTop from './components/ScrollToTop';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // <React.StrictMode>
    <BrowserRouter>
        <QueryParamProvider
            adapter={ReactRouter6Adapter}
            options={{
                searchStringToObject: queryString.parse,
                objectToSearchString: queryString.stringify,
            }}
        >
            <GlobalStyles>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition={Bounce}
                />
                <ToastContainer />
                <ScrollToTop />
                <App />
            </GlobalStyles>
        </QueryParamProvider>
    </BrowserRouter>,
    // {/* </React.StrictMode>, */}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
