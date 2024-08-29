import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import { AiComponentProps } from "../base/ai-component-props";

const schema = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

type FormValues = yup.InferType<typeof schema>;

interface RegisterSimpleProps extends AiComponentProps {
  onLogin: (values: FormValues) => Promise<void>;
}

const RegisterSimple: FC<RegisterSimpleProps> = ({ theme, onLogin }) => {
  const {
    register,
    formState: { isValid, isSubmitting },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [error, setError] = useState<string>();

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    setError(undefined);
    try {
      await onLogin(values);
    } catch (e) {
      setError("network error");
    }
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2
            className={`mt-10 text-center text-2xl font-bold leading-9 tracking-tight ${
              theme === "dark" ? "text-ai-title-dark" : "text-ai-title-regular"
            }`}
          >
            Create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium leading-6 ${
                  theme === "dark"
                    ? "text-ai-title-dark"
                    : "text-ai-title-regular"
                }`}
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  autoComplete="email"
                  required
                  className={
                    theme === "dark"
                      ? "w-full min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                      : "w-full min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-ai-title-regular shadow-sm ring-1 ring-inset ring-ai-subtext-regular/[.4] placeholder:text-ai-subtext-regular/[.5] focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  }
                  {...register("email")}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className={`block text-sm font-medium leading-6 ${
                    theme === "dark"
                      ? "text-ai-title-dark"
                      : "text-ai-title-regular"
                  }`}
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  autoComplete="current-password"
                  required
                  className={
                    theme === "dark"
                      ? "w-full min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                      : "w-full min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-ai-title-regular shadow-sm ring-1 ring-inset ring-ai-subtext-regular/[.4] placeholder:text-ai-subtext-regular/[.5] focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  }
                  {...register("password")}
                />
              </div>
            </div>
            <div className="my-2">
              {error && (
                <div className="rounded-md bg-yellow-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <ExclamationTriangleIcon
                        className="h-5 w-5 text-yellow-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-yellow-800">
                        Register failed
                      </h3>
                      <div className="mt-2 text-sm text-yellow-700">
                        <p>{error}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                disabled={!isValid || isSubmitting}
              >
                Create account
              </button>
            </div>
          </form>

          <p
            className={`mt-10 text-center text-sm ${
              theme === "dark"
                ? "text-ai-subtext-dark"
                : "text-ai-subtext-regular"
            }`}
          >
            Already a member?{" "}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/login"
              className={`font-semibold leading-6 ${
                theme === "dark"
                  ? "text-primary-500 hover:text-primary-400"
                  : "text-primary-600 hover:text-primary-500"
              }`}
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterSimple;
