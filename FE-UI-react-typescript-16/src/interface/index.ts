export interface ILayoutProps {
  children: React.ReactNode;
  className?: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  image: string;
  description?: string;
  category?: string;
}
