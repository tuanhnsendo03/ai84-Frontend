import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";
import Image from "next/image";

const stats = [
  { id: 1, name: "Creators on the platform", value: "8,000+" },
  { id: 2, name: "Flat platform fee", value: "3%" },
  { id: 3, name: "Uptime guarantee", value: "99.9%" },
  { id: 4, name: "Paid out to creators", value: "$70M" },
];

export default function StatsSplitWithImage({
  theme,
}: AiComponentProps) {
  return (
    <div className="relative">
      <Image
          className="h-56 w-full bg-ai-card-regular object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
          src="/img/sections/stats/stats-image-1.jpeg"
          alt=""
          width="2850"
          height="1901"
        />
      <div className="relative isolate">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
              <h2
                className="text-base font-semibold leading-8 text-primary-600"
              >
                Our track record
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-ai-title-regular sm:text-4xl">
                Trusted by thousands of creators worldwide
              </p>
              <p className="mt-6 text-lg leading-8 text-ai-subtext-regular">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </p>
              <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="flex flex-col gap-y-3 border-l border-ai-subtext-regular/[.2] pl-6"
                  >
                    <dt className="text-sm leading-6 text-ai-subtext-regular">
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
        </div>
        <ThemeOverlay theme={theme} />
      </div>
    </div>
  );
}
