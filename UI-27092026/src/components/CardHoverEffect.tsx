import type { ReactNode } from "react";

export interface CardHoverItem {
  title: string;
  description: string;
  icon?: ReactNode;
  href?: string;
}

interface CardHoverEffectProps {
  items: CardHoverItem[];
  className?: string;
}

const CardHoverEffect = ({ items, className = "" }: CardHoverEffectProps) => {
  return (
    <div className={`card-hover-effect grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {items.map((item) => {
        const content = (
          <>
            {item.icon && <div className="card-hover-effect__icon mb-4 text-2xl">{item.icon}</div>}
            <h3 className="card-hover-effect__title text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600">{item.title}</h3>
            <p className="card-hover-effect__description mt-2 text-sm leading-6 text-gray-600">{item.description}</p>
            <span className="card-hover-effect__arrow mt-4 inline-block translate-x-0 text-sm font-medium text-blue-600 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">Learn More →</span>
          </>
        );

        return item.href ? (
          <a key={item.title} href={item.href} className="card-hover-effect__card group rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
            {content}
          </a>
        ) : (
          <div key={item.title} className="card-hover-effect__card group rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
            {content}
          </div>
        );
      })}
    </div>
  );
};

export default CardHoverEffect;