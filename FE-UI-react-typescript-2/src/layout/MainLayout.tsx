import type { MainLayoutProps } from "../interface";

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="appLayout w-full">
      <Header />
    </div>
  );
};

export default MainLayout;
