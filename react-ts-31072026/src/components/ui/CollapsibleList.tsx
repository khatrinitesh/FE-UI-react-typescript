import { CreditCard, Package, Settings, Truck } from "lucide-react";
import Collapsible from "./Collapsible";

export default function CollapsibleList() {
  return (
    <section className="w-full max-w-2xl">
      <header className="mb-6">
        <p className="font-montserrat text-12 font-semibold uppercase tracking-[0.16em] text-primary">
          Help centre
        </p>

        <h1 className="mt-2 font-arialnb text-36 font-bold text-secondary">
          Collapsible sections
        </h1>

        <p className="mt-2 font-montserrat text-14 text-secondary/70">
          Click a section to expand or collapse its content.
        </p>
      </header>

      <div className="space-y-3">
        <Collapsible
          title="Order information"
          description="View your order details and current status."
          defaultOpen
        >
          <div className="flex items-start gap-4">
            <Package
              size={22}
              className="mt-1 shrink-0 text-primary"
              aria-hidden="true"
            />

            <div>
              <h2 className="font-montserrat text-16 font-semibold text-slate-900">
                Order #BR-10245
              </h2>

              <p className="mt-1">
                Your order has been confirmed and is being prepared for
                dispatch.
              </p>
            </div>
          </div>
        </Collapsible>

        <Collapsible
          title="Shipping details"
          description="Check your delivery address and timeline."
        >
          <div className="flex items-start gap-4">
            <Truck
              size={22}
              className="mt-1 shrink-0 text-primary"
              aria-hidden="true"
            />

            <div>
              <h2 className="font-montserrat text-16 font-semibold text-slate-900">
                Estimated delivery
              </h2>

              <p className="mt-1">
                Your package should arrive within three to five business days.
              </p>
            </div>
          </div>
        </Collapsible>

        <Collapsible
          title="Payment method"
          description="Manage card and payment information."
        >
          <div className="flex items-start gap-4">
            <CreditCard
              size={22}
              className="mt-1 shrink-0 text-primary"
              aria-hidden="true"
            />

            <div>
              <h2 className="font-montserrat text-16 font-semibold text-slate-900">
                Visa ending in 4242
              </h2>

              <p className="mt-1">
                This payment method was used for your latest purchase.
              </p>
            </div>
          </div>
        </Collapsible>

        <Collapsible
          title="Advanced settings"
          description="Additional preferences are currently unavailable."
          disabled
        >
          <div className="flex items-start gap-4">
            <Settings
              size={22}
              className="mt-1 shrink-0 text-primary"
              aria-hidden="true"
            />

            <p>Advanced configuration options.</p>
          </div>
        </Collapsible>
      </div>
    </section>
  );
}
