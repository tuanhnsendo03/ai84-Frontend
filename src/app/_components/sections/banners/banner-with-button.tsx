import { XMarkIcon } from "@heroicons/react/20/solid";
import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";

export default function BannerWithButton({theme}: AiComponentProps) {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden px-6 py-2.5 sm:px-3.5 sm:before:flex-1 bg-primary-400/[.1]">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-ai-title-regular">
          <strong className="font-semibold">
            GeneriCon 2024
          </strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
            Join us in Denver from June 7 – 9 to see what’s coming next.
        </p>
        <a href="#" className="flex-none rounded-full border border-primary-600 text-primary-600 shadow-sm px-3.5 py-1 text-sm font-semibold hover:opacity-80">
          Register Now{" "}
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon
            className="h-5 w-5 text-ai-title-regular"
            aria-hidden="true"
          />
        </button>
      </div>
      <ThemeOverlay theme={theme} />
    </div>
  );
}
