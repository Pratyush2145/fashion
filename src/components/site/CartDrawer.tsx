import { Trash2, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-screen w-full max-w-md bg-[color:var(--background)] border-l border-[color:var(--border)] z-50 transform transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[color:var(--border)]">
          <h2 className="font-serif text-2xl">Shopping Bag</h2>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-[color:var(--muted)] rounded-md transition"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex items-center justify-center text-center">
              <div>
                <p className="text-[color:var(--muted-foreground)] text-sm">
                  Your bag is empty
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 text-[11px] uppercase tracking-[0.3em] font-medium luxe-link"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 pb-4 border-b border-[color:var(--border)]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-32 object-cover rounded"
                  />
                  <div className="flex-1 flex flex-col">
                    <div className="flex-1">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
                        {item.category}
                      </p>
                      <h3 className="font-serif text-sm mt-1">{item.name}</h3>
                      <p className="font-mono text-sm mt-2">€{item.price}</p>
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2 border border-[color:var(--border)] rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-[color:var(--muted)]"
                        >
                          −
                        </button>
                        <span className="px-2 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-[color:var(--muted)]"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1.5 hover:bg-red-50 rounded transition"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-[color:var(--border)] p-6 space-y-4">
            <div className="flex items-center justify-between font-mono">
              <span>Subtotal</span>
              <span>€{cartTotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-[color:var(--noir)] text-[color:var(--ivory)] font-medium py-3 uppercase tracking-[0.2em] text-[11px] hover:bg-[color:var(--noir)]/80 transition">
              Proceed to Checkout
            </button>
            <button
              onClick={onClose}
              className="w-full border border-[color:var(--border)] text-[color:var(--foreground)] font-medium py-3 uppercase tracking-[0.2em] text-[11px] hover:bg-[color:var(--muted)] transition"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
