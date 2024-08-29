"use client";

import { FC } from "react";
import LoginSimple from "@/app/_components/sections/auth/login-simple";
import { authenticate } from "@/api/auth/authenticate";
import config from "@/settings.json";
import { TemplateTheme } from "@/app/_components/sections/base/ai-component-props";

const Page: FC = () => {
  return (
    <LoginSimple
      theme={config.theme as TemplateTheme}
      onLogin={async ({ email, password }) => {
        const response = await authenticate(email, password);
        return Promise.reject(response);
      }}
    />
  );
};

export default Page;
