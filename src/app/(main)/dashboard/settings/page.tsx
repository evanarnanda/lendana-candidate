import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { env } from "@/env";
import { validateRequest } from "@/lib/auth/validate-request";

import TabSwitcher from "./_components/tab-switcher";
import PrivateData from "./_components/PrivateData";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Settings",
  description: "Manage your profile and account settings",
};


export default async function SettingPage() {
  const { user } = await validateRequest();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="grid gap-8">
      <div>
        <h1 className="text-3xl font-bold md:text-4xl">Settings</h1>
        <p className="text-sm text-muted-foreground">Manage your profile settings</p>
      </div>
      
      <TabSwitcher Page1={<PrivateData />} Page2={<div>Study History</div>} Page1ButtonText="Bio data" Page2ButtonText="Record Study" />
    </div>
  );
}
