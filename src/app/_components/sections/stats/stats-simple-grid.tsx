import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";

const stats = [
  { id: 1, name: "Creators on the platform", value: "8,000+" },
  { id: 2, name: "Flat platform fee", value: "3%" },
  { id: 3, name: "Uptime guarantee", value: "99.9%" },
  { id: 4, name: "Paid out to creators", value: "$70M" },
];


export default function StatsSimpleGrid({ theme }: AiComponentProps) {
  return (
    <div>
      <div className="relative isolate py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-ai-title-regular sm:text-4xl">
                Rev Up Your Ride with Car Rent 8
              </h2>
              <p className="mt-4 text-lg leading-8 text-ai-subtext-regular">
                Experience seamless, reliable car rentals engineered for your journey – hassle-free from start to finish.
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 rounded-2xl overflow-hidden text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={stat.id} className="relative flex flex-col bg-ai-card-regular p-8">
                  <dt className="text-sm font-semibold leading-6 text-ai-subtext-regular">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-ai-title-regular">
                    {stat.value}
                  </dd>
                  
                </div>
              ))}
            </dl>
          </div>
        </div>
        <ThemeOverlay theme={theme} />
      </div>
    </div>
  );
}
