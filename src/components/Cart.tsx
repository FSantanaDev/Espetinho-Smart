import { X, Minus, Plus, Trash2, Send } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { formatCurrency } from '../lib/utils';
import { useState } from 'react';

export function Cart() {
  const { items, isOpen, toggleCart, updateQuantity, removeItem, total, clearCart } = useCartStore();
  const [customerName, setCustomerName] = useState('');

  if (!isOpen) return null;

  const handleCheckout = () => {
    const phoneNumber = '5592999889392';
    let message = `*Olá, gostaria de fazer um pedido!*\n\n`;
    
    if (customerName) {
      message += `*Cliente:* ${customerName}\n\n`;
    }

    items.forEach((item) => {
      message += `${item.quantity}x ${item.name}\n`;
      message += `   ${formatCurrency(item.price)} (Total: ${formatCurrency(item.price * item.quantity)})\n`;
    });

    message += `\n*Total do Pedido: ${formatCurrency(total())}*`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    
    clearCart();
    setCustomerName('');
    toggleCart();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={toggleCart} />
      
      <div className="relative w-full max-w-md bg-white h-full flex flex-col shadow-xl animate-in slide-in-from-right duration-300">
        <div className="p-4 border-b flex items-center justify-between bg-red-50">
          <h2 className="text-lg font-bold text-red-900">Seu Pedido</h2>
          <button onClick={toggleCart} className="p-2 hover:bg-red-100 rounded-full text-red-900">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="text-center text-gray-500 mt-10">
              <p>Seu carrinho está vazio.</p>
              <button 
                onClick={toggleCart}
                className="mt-4 text-red-600 font-semibold hover:underline"
              >
                Voltar ao cardápio
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-3 bg-white border rounded-lg p-3 shadow-sm">
                 <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800 line-clamp-1">{item.name}</h4>
                  <p className="text-red-600 font-semibold">{formatCurrency(item.price)}</p>
                  
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2 border rounded-md p-1">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t bg-gray-50 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Seu Nome (Opcional)
              </label>
              <input
                type="text"
                id="name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Digite seu nome"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500 outline-none"
              />
            </div>
            
            <div className="flex justify-between items-center text-lg font-bold text-gray-900">
              <span>Total:</span>
              <span>{formatCurrency(total())}</span>
            </div>
            
            <button
              onClick={handleCheckout}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <Send className="h-5 w-5" />
              Enviar Pedido no WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
