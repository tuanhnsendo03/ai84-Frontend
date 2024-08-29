"use client";

import { FC } from "react";
import RegisterSimple from "@/app/_components/sections/auth/register-simple";
import useCreateAccount from "@/api/auth/useCreateAccount";
import { authenticate } from "@/api/auth/authenticate";
import config from "@/settings.json";
import { TemplateTheme } from "@/app/_components/sections/base/ai-component-props";

const Page: FC = () => {
  const { mutate: createAccount } = useCreateAccount();
  return (
    <RegisterSimple
      theme={config.theme as TemplateTheme}
      onLogin={async ({ email, password }) => {
        await createAccount(email, password);
        await authenticate(email, password);
      }}
    />
  );
};

export default Page;
