# Technical Architecture - Espetinho Smart

## 1. Tech Stack
- **Frontend Framework**: React (v18+) with TypeScript.
- **Build Tool**: Vite.
- **Styling**: Tailwind CSS.
- **State Management**: Zustand (for cart management).
- **Icons**: Lucide React.
- **Routing**: Not strictly necessary for a single-page landing, but React Router can be used if we expand. We will use a single page layout with scroll sections.

## 2. Project Structure
```
src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── MenuSection.tsx
│   ├── MenuItem.tsx
│   ├── Cart.tsx
│   └── Footer.tsx
├── data/
│   └── menu.ts (Static data for products)
├── store/
│   └── useCartStore.ts (Zustand store)
├── types/
│   └── index.ts
└── App.tsx
```

## 3. Data Models
### Product
```typescript
interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: 'complete' | 'simple' | 'simple-vinaigrette' | 'simple-mayo' | 'simple-all' | 'portion';
  image?: string; // Placeholder URL
}
```

### CartItem
```typescript
interface CartItem extends Product {
  quantity: number;
}
```

## 4. WhatsApp Integration
- Logic: Construct a URL `https://wa.me/5592991298846?text=ENCODED_MESSAGE`
- Message Format:
  ```
  Olá, gostaria de fazer um pedido:
  - 1x Carne Completo (R$ 29,00)
  - 2x Arroz (R$ 18,00)
  
  Total: R$ 47,00
  ```
