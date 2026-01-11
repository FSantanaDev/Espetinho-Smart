import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { Cart } from './components/Cart';
import { menuItems } from './data/menu';
import { useCartStore } from './store/useCartStore';

function App() {
  const isOpen = useCartStore((state) => state.isOpen);

  // Group items by category
  const complete = menuItems.filter(i => i.category === 'complete');
  const simple = menuItems.filter(i => i.category === 'simple');
  const simpleVinaigrette = menuItems.filter(i => i.category === 'simple-vinaigrette');
  const simpleMayo = menuItems.filter(i => i.category === 'simple-mayo');
  const simpleAll = menuItems.filter(i => i.category === 'simple-all');
  const portions = menuItems.filter(i => i.category === 'portion');

  return (
    <div className={`min-h-screen bg-gray-50 pb-20 ${isOpen ? 'overflow-hidden h-screen' : ''}`}>
      <Header />
      
      <main className="pt-16">
        <Hero />
        
        <div className="container mx-auto max-w-5xl px-2 space-y-4 mt-8">
          <MenuSection title="Espetinhos Completos" products={complete} />
          <MenuSection title="Simples com Farofa" products={simple} />
          <MenuSection title="Simples com Farofa e Vinagrete" products={simpleVinaigrette} />
          <MenuSection title="Simples com Farofa e Batatonese" products={simpleMayo} />
          <MenuSection title="Completo Simples (Todos os Acompanhamentos)" products={simpleAll} />
          <MenuSection title="Porções Extras" products={portions} />
        </div>
      </main>

      <Cart />
      
      <footer className="bg-gray-800 text-gray-400 py-8 text-center mt-12">
        <p>© {new Date().getFullYear()} Espetinho Smart. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Feito com ❤️ para o melhor churrasco.</p>
      </footer>
    </div>
  );
}

export default App;
