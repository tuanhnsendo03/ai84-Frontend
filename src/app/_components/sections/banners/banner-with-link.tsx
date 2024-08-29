import { XMarkIcon } from "@heroicons/react/20/solid";
import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";

export default function BannerWithLink({ theme}: AiComponentProps) {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden px-6 py-2.5 sm:px-3.5 sm:before:flex-1 bg-primary-400/[.1]">
      <p className="text-sm leading-6 text-ai-title-regular">
        Join us in Denver from June 7 – 9 to see what’s coming next.{" "}
        <a href="#" className="whitespace-nowrap font-semibold">
          Get your ticket&nbsp;
          <span aria-hidden="true">&rarr;</span>
        </a>
      </p>
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
