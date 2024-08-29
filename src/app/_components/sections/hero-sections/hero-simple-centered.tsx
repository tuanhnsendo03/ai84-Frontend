import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";
import Image from "next/image";
import Button from "../base/Button";
import LinkButton from "../base/LinkButton";

export default function HeroSimpleCentered({
  theme
}: AiComponentProps) {
  return (
    <>
      
        <div>
          <div className="relative isolate px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-ai-subtext-regular ring-1 ring-primary-200/[.5]">
                  Announcing our next round of funding.{" "}
                  <a
                    href="#"
                    className="font-semibold text-primary-600"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-ai-title-regular sm:text-6xl">
                  Data to enrich your online business
                </h1>
                <p
                  className="mt-6 text-lg leading-8 text-ai-subtext-regular"
                >
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
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
            </div>
            <ThemeOverlay theme={theme} />
          </div>
        </div>
      
    </>
  );
}
