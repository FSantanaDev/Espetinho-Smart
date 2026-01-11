# Product Requirements Document (PRD) - Espetinho Smart

## 1. Introduction
Espetinho Smart is a landing page for a small kebab business allowing customers to view the menu, select items, and send their order via WhatsApp.

## 2. Goals
- Provide a simple and attractive mobile-first interface.
- Allow customers to easily browse the menu.
- Enable customers to build an order (cart).
- Send the final order formatted as a message to the business WhatsApp.

## 3. User Flow
1. **Landing**: User arrives at the page, sees the brand and a "Order Now" call to action.
2. **Menu Browsing**: User scrolls through categories (Complete, Simple, Portions).
3. **Selection**: User clicks "Add" on items.
4. **Cart Management**: User sees a floating cart button/summary. Clicking it opens the order summary.
5. **Checkout**: User inputs their name (optional but good for the message) and clicks "Send Order to WhatsApp".
6. **Redirect**: User is redirected to WhatsApp with a pre-filled message.

## 4. Functional Requirements
- **Menu Display**: Group items by category (Complete, Simple, Portions).
- **Cart**: Add/Remove items, calculate total price.
- **WhatsApp Integration**: Format the message with item details, quantities, subtotal, and grand total.
- **Responsive Design**: Must work perfectly on mobile devices.

## 5. Menu Data
(Based on user input)
- **Complete**: Meat ($29), Chicken ($28), Mixed ($28). Includes sides.
- **Simple**: Meat ($17), Mixed ($17), Chicken ($17). With Farofa.
- **Simple + Vinaigrette**: Meat ($20), Chicken ($20), Mixed ($20).
- **Simple + Mayo**: Meat ($20), Chicken ($20), Mixed ($20).
- **Simple + All**: Meat ($23), Chicken ($23), Mixed ($23).
- **Portions**: Rice ($9), Mayo ($15), Farofa ($10), Vinaigrette ($12), Vatapa ($20), Tropeiro Beans ($20).

## 6. Non-Functional Requirements
- **Performance**: Fast loading (static site).
- **Stack**: React, Vite, Tailwind CSS, Lucide React (icons).
