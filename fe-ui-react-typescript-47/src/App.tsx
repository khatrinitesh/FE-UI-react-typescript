import { Toaster } from "sonner";

import QueryProvider from "./providers/QueryProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <QueryProvider>
      <AppRouter />
      <Toaster position="top-right" richColors closeButton />
    </QueryProvider>
  );
}

export default App;
