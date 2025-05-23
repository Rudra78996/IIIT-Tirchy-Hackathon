'use client';
import { Toaster } from 'react-hot-toast';
import React from 'react'; 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


/**
 @notice Providers.js

 @dev Providers contains all the third-party providers and wrappers which we are going to use in our application
 @dev This can be:
    * Authentication
    * Toaster
    * React forms
 @dev Here as we can see we are wrapping our children insider all the providers we are going to use.
 */


function Providers({children}) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Providers;