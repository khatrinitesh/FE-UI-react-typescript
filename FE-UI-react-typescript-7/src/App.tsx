import ErrorBoundary from "./pages/errorBoundaryPage/ErrorBoundaryPage";
import RoutesPath from "./routes/RoutesPath";

function App() {
  return (
    <ErrorBoundary>
      <RoutesPath />
    </ErrorBoundary>
  );
}

export default App;
