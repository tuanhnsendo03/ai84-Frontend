"use client";

import { FC, useState } from "react";
import { notFound } from "next/navigation";
import BillingView from "@/app/_components/sections/billing/billing-view";
import { loadStripe } from "@stripe/stripe-js";
import useCreateCheckoutSession from "@/api/payment/useCreateCheckoutSession";
import useRuntimeEnv from "@/api/env/useRuntimeEnv";
import Alert from "@/app/_components/common/Alert";
import { Tier } from "@/app/_components/sections/billing/pricing-card";
import NavbarSimple from "@/app/_components/sections/navbar/navbar-simple";
import config from "@/settings.json";
import { TemplateTheme } from "@/app/_components/sections/base/ai-component-props";

const onetimeTiers: Array<Tier> = [
  {
    name: "Pro",
    id: "product_id",
    href: "#",
    price: {
      id: "price_1PX5gj07FYOOa5s0Hvfv6yzs",
      price: "$12",
      type: "",
    },
    description: "Everything necessary to get started.",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
  },
];

const recurringTiers: Array<Tier> = [
  {
    name: "Pro",
    id: "product_id",
    href: "#",
    price: {
      id: "price_1PXP1m07FYOOa5s0Z1wyyR8D",
      price: "$15",
      type: "monthly",
    },
    description: "Everything necessary to get started.",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
  },
];

const Page: FC = () => {
  const billingType = process.env.NEXT_PUBLIC_BILLING;
  const createCheckoutSession = useCreateCheckoutSession();
  const runtimeEnv = useRuntimeEnv();
  const [error, setError] = useState<string>();
  if (billingType) {
    return (
      <div>
        <NavbarSimple theme={config.theme as TemplateTheme} />
        <BillingView
          theme={config.theme as TemplateTheme}
          tiers={billingType === "onetime" ? onetimeTiers : recurringTiers}
          onCheckout={async (priceId) => {
            setError(undefined);
            try {
              let { id } = await createCheckoutSession(
                {
                  priceId,
                  successUrl: `${process.env.NEXT_PUBLIC_DOMAIN}/?session_id={CHECKOUT_SESSION_ID}`,
                  cancelUrl: `${process.env.NEXT_PUBLIC_DOMAIN}/`,
                },
                billingType,
              );
              const env = await runtimeEnv();
              loadStripe(env.stripePublishableKey ?? "").then((s) =>
                s?.redirectToCheckout({ sessionId: id }),
              );
            } catch (error) {
              setError(`Failed to create checkout`);
              console.error("Error creating checkout session:", error);
            }
          }}
        />
        <div className="max-w-96 mx-auto mt-4">
          {error && <Alert title="Failed to create checkout" />}
        </div>
      </div>
    );
  } else {
    return notFound();
  }
};

export default Page;
