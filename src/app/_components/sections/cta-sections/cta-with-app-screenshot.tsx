import { AiComponentProps } from "../base/ai-component-props";
import Button from "../base/Button";
import LinkButton from "../base/LinkButton";
import Image from "next/image";

export default function CtaWithAppScreenshot({
  theme
}: AiComponentProps) {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-ai-card-regular px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-ai-title-regular sm:text-4xl">
              Boost your productivity.
              <br />
              Start using our app today.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-ai-subtext-regular">
              Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
             <Button theme={theme} href="#">
                Get started
              </Button>
              <LinkButton theme={theme} href="#">
                Learn more
              </LinkButton>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <Image
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="/img/sections/cta-sections/dark-project-app-screenshot.png"
              alt="App screenshot"
              width={1910}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
