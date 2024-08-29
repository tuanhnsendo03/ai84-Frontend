import Button from "../base/Button";
import LinkButton from "../base/LinkButton";
import { AiComponentProps } from "../base/ai-component-props";
import Image from "next/image";

export default function HeroWithOffsetImage({
  theme
}: AiComponentProps) {
  return (
    <div className="bg-ai-background-regular">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20">
        
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-ai-background-regular ring-primary-50 shadow-xl shadow-primary-600/10 ring-1 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none grid-flow-col lg:gap-x-16 lg:gap-y-6 grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-ai-title-regular sm:text-6xl lg:col-span-1 col-auto">
              Rev Up Your Ride with Car Rent 8
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 col-end-1 row-start-1">
              <p className="text-lg leading-8 text-ai-subtext-regular">
                Experience seamless, reliable car rentals engineered for your journey – hassle-free from start to finish.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Button theme={theme} href="#">
                  Get started
                </Button>
                <LinkButton theme={theme} href="#">
                  Learn more
                </LinkButton>
              </div>
            </div>
            <Image
              src="/img/sections/hero-sections/offset-image-people.png"
              alt=""
              className="mt-10 aspect-[6/5] w-full object-cover sm:mt-16 lg:mt-0 lg:max-w-none row-span-2 row-end-2 rounded-2xl"
              width={1280}
              height={853}
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"/>
      </div>
    </div>
  );
}
