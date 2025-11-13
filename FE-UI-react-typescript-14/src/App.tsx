import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import RoutesPath from "./routes/RoutesPath";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "sonner";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <RoutesPath />
        <Toaster position="top-right" richColors />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
