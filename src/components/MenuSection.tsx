import { Product } from '../types';
import { MenuItem } from './MenuItem';

interface MenuSectionProps {
  title: string;
  products: Product[];
}

export function MenuSection({ title, products }: MenuSectionProps) {
  if (products.length === 0) return null;

  return (
    <section className="py-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 px-2 border-l-4 border-red-600 ml-2">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
        {products.map((product) => (
          <MenuItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
