import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Main } from './layouts';

const queryClient = new QueryClient();

export const App: React.FC = React.memo(() => {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
})
