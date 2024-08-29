/* eslint-disable @next/next/no-img-element */
import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";

const featuredTestimonial = {
  body: "Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.",
  author: {
    name: "Brenna Goyette",
    handle: "brennagoyette",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
    logoUrl: "https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg",
  },
};
const testimonials = [
  [
    [
      {
        body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
        author: {
          name: "Leslie Alexander",
          handle: "lesliealexander",
          imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      // More testimonials...
    ],
    [
      {
        body: "Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.",
        author: {
          name: "Lindsay Walton",
          handle: "lindsaywalton",
          imageUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: "Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.",
        author: {
          name: "Tom Cook",
          handle: "tomcook",
          imageUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      // More testimonials...
    ],
    [
      {
        body: "Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.",
        author: {
          name: "Leonard Krasner",
          handle: "leonardkrasner",
          imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      // More testimonials...
    ],
  ],
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function TestimonialsGrid({ theme }: AiComponentProps) {
  return (
    <div className={`relative isolate pb-32 pt-24 sm:pt-32`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2
            className={`text-lg font-semibold leading-8 tracking-tight ${
              theme === "dark" ? "text-primary-500" : "text-primary-600"
            }`}
          >
            Testimonials
          </h2>
          <p
            className={`mt-2 text-3xl font-bold tracking-tight ${
              theme === "dark" ? "text-ai-title-dark" : "text-ai-title-regular"
            } sm:text-4xl`}
          >
            We have worked with thousands of amazing people
          </p>
        </div>
        <div
          className={`mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 ${
            theme === "dark" ? "text-ai-title-dark" : "text-ai-title-regular"
          } sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4`}
        >
          <figure
            className={`rounded-2xl ${
              theme === "dark" ? "bg-ai-card-dark" : "bg-ai-card-regular"
            } ${
              theme === "neo-brutal"
                ? "border-2 border-ai-title-regular shadow-neo-brutal-lg-end"
                : ""
            } shadow-lg sm:col-span-2 xl:col-start-2 xl:row-end-1`}
          >
            <blockquote
              className={`p-6 text-lg font-semibold leading-7 tracking-tight ${
                theme === "dark"
                  ? "text-ai-title-dark"
                  : "text-ai-title-regular"
              } sm:p-12 sm:text-xl sm:leading-8`}
            >
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <div
              className={`border-t ${
                theme === "dark"
                  ? "border-ai-title-dark/[.1]"
                  : "border-ai-title-regular/[.1]"
              } mx-6`}
            />
            <figcaption className="px-6 py-4">
              <div
                className={`flex flex-wrap items-center gap-x-4 gap-y-4 sm:flex-nowrap ${
                  theme === "neo-brutal"
                    ? "border-2 border-ai-title-regular bg-ai-secondary/[.3] px-6 py-4 rounded"
                    : ""
                }`}
              >
                <img
                  className="h-10 w-10 flex-none rounded-full"
                  src={featuredTestimonial.author.imageUrl}
                  alt=""
                />
                <div className="flex-auto">
                  <div className="font-semibold">
                    {featuredTestimonial.author.name}
                  </div>
                  <div
                    className={`${
                      theme === "dark"
                        ? "text-ai-subtext-dark"
                        : "text-ai-subtext-regular"
                    }`}
                  >
                    {`@${featuredTestimonial.author.handle}`}
                  </div>
                </div>
                <img
                  className="h-10 w-auto flex-none"
                  src={
                    theme === "dark"
                      ? "https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
                      : featuredTestimonial.author.logoUrl
                  }
                  alt=""
                />
              </div>
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1",
                    "space-y-8",
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className={`rounded-2xl ${
                        theme === "dark"
                          ? "bg-ai-card-dark"
                          : "bg-ai-card-regular"
                      } ${
                        theme === "neo-brutal"
                          ? "border-2 border-ai-title-regular"
                          : ""
                      } p-6 shadow-lg`}
                    >
                      <blockquote>
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={testimonial.author.imageUrl}
                          alt=""
                        />
                        <div>
                          <div className="font-semibold">
                            {testimonial.author.name}
                          </div>
                          <div
                            className={`${
                              theme === "dark"
                                ? "text-ai-subtext-dark"
                                : "text-ai-subtext-regular"
                            }`}
                          >
                            {`@${testimonial.author.handle}`}
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <ThemeOverlay theme={theme} />
    </div>
  );
}
