import { Plus } from 'lucide-react';
import { Product } from '../types';
import { useCartStore } from '../store/useCartStore';
import { formatCurrency } from '../lib/utils';

interface MenuItemProps {
  product: Product;
}

export function MenuItem({ product }: MenuItemProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col">
      <div className="relative h-48 w-full bg-gray-200">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-lg text-gray-800 mb-1">{product.name}</h3>
        {product.description && (
          <p className="text-sm text-gray-500 mb-3 line-clamp-2 flex-1">{product.description}</p>
        )}
        <div className="flex items-center justify-between mt-auto">
          <span className="font-bold text-red-600 text-lg">
            {formatCurrency(product.price)}
          </span>
          <button
            onClick={() => addItem(product)}
            className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors shadow-sm active:scale-95"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
