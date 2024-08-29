import { FC } from "react";
import { AiComponentProps } from "../base/ai-component-props";
import PricingCard, { Tier } from "./pricing-card";

const DEFAULT_TIER: Tier = {
  name: "Pro",
  id: "product_id",
  href: "#",
  price: undefined,
  description: "Everything necessary to get started.",
  features: [
    "Product Feature 1",
    "Product Feature 2",
    "Product Feature 3",
    "Product Feature 4",
  ],
};

interface BillingViewProps extends AiComponentProps {
  tiers?: Tier[];
  onCheckout: (priceId: string) => Promise<void>;
}

const BillingView: FC<BillingViewProps> = ({
  theme,
  tiers = [DEFAULT_TIER],
  onCheckout,
}) => {
  return (
    <div className={"flex items center justify-center flex-row"}>
      {tiers.map((tier, index) => (
        <PricingCard
          key={index}
          tier={tier}
          theme={theme}
          onSubscribe={async () => {
            if (tier.price) {
              await onCheckout(tier.price.id);
            }
          }}
        />
      ))}
    </div>
  );
};

export default BillingView;
