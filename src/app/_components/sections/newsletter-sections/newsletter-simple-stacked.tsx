import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";
import Button from "../base/Button";

export default function NewsletterSimpleStacked({theme}: AiComponentProps) {
  return (
    <div>
      <div className="relative isolate py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="max-w-2xl text-3xl font-bold tracking-tight text-ai-title-regular sm:text-4xl">
            <h2 className="inline sm:block">
              Want product news and updates?
            </h2>{" "}
            <p className="inline sm:block">
              Sign up for our newsletter.
            </p>
          </div>
          <form className="mt-10 max-w-md">
            <div className="flex gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-ai-title-regular shadow-sm ring-1 ring-inset ring-ai-subtext-regular/[.4] placeholder:text-ai-subtext-regular/[.5] focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <Button theme={theme} href="#">Subscribe</Button>
            </div>
            <p className="mt-4 text-sm leading-6 text-ai-subtext-regular">
              We care about your data. Read our{" "}
              <a
                href="#"
                className="font-semibold text-primary-600 hover:text-primary-500"
              >
                privacy&nbsp;policy
              </a>
              .
            </p>
          </form>
        </div>
        <ThemeOverlay theme={theme} />
      </div>
    </div>
  );
}
