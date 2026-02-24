import ErrorBoundary from "./component/ErrorBoundary";
import MainLayout from "./component/layout/MainLayout";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <ErrorBoundary>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </ErrorBoundary>
  );
};

export default App;
