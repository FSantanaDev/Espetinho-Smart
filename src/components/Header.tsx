import { ShoppingCart, Menu as MenuIcon } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';

export function Header() {
  const { toggleCart, items } = useCartStore();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 right-0 bg-red-700 text-white z-50 shadow-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MenuIcon className="h-6 w-6 md:hidden" />
          <h1 className="text-xl font-bold">Espetinho Smart</h1>
        </div>
        
        <button 
          onClick={toggleCart}
          className="relative p-2 hover:bg-red-800 rounded-full transition-colors"
        >
          <ShoppingCart className="h-6 w-6" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-yellow-400 text-red-900 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
