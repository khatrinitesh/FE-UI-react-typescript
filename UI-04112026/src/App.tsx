import FAQAccordion from "./components/accordionSection/FAQAccodion";
import AlertSection from "./components/alertSection/AlertSection";
import ProductSection from "./components/ProductSection/ProductSection";
import UserManagement from "./components/userManagementSection/UserManagement";

function App() {
  return (
    <>
      <UserManagement />
      <AlertSection />
      <ProductSection />
      <FAQAccordion />
    </>
  );
}

export default App;
