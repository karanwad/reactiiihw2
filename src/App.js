import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import './App.css';

const queryClient = new QueryClient({});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>

      {/* The rest of your application  */}

      <ReactQueryDevTools initalIsOpen={true} />

    </QueryClientProvider>
  );
};

export default App;
