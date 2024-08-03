import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "react-multi-carousel/lib/styles.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "./components/ErrorComponent.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { Toaster } from "react-hot-toast";
import { textBody2 } from "./constants/styles.ts";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: Infinity },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster
      containerStyle={{ zIndex: 10001 }}
      toastOptions={{
        className:
          "bg-main-secondary-bg text-main-primary-text shadow-box-shadow-1 " +
          textBody2,
      }}
    />
    <ErrorBoundary FallbackComponent={ErrorComponent}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
