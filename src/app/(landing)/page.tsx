import Link from "next/link";
import { type Metadata } from "next";
import { PlusIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { CopyToClipboard } from "./_components/copy-to-clipboard";
import {
  Drizzle,
  LuciaAuth,
  NextjsLight,
  NextjsDark,
  ReactJs,
  ShadcnUi,
  TRPC,
  TailwindCss,
  StripeLogo,
  ReactEmail,
} from "./_components/feature-icons";
import CardSpotlight from "./_components/hover-card";

export const metadata: Metadata = {
  title: "Gateway for people seek international job | Lendana",
  description:
    "We give you a gateway for people seeking international job. We are a platform that connects people seeking international job with employers.",
};

const githubUrl = "https://github.com/evanarnanda/lendana-candidate";

const features = [
  {
    name: "Resume",
    description: "We provide auto generate resume for you. You can easily share to public or privately.",
    logo: NextjsIcon,
  },
  {
    name: "Job Seeker",
    description: "By using Lendana, you can easily find jobs for your needs. And the system will help you to check the job's requirements and qualifications.",
    logo: ReactJs,
  },
  {
    name: "Recruiters",
    description: "We provide a platform for recruiters to manage their job postings and applicants. You can easily apply for jobs and track the status of your applications.",
    logo: LuciaAuth,
  },
];

const HomePage = () => {
  return (
    <>
      <section className="mx-auto grid min-h-[calc(100vh-300px)] max-w-5xl flex-col  items-center justify-center gap-4 py-10 text-center  md:py-12">
        <div className="p-4">
          <div className="mb-10 flex items-center justify-center gap-3">
            Lendana
          </div>
          <h1 className="text-balance bg-gradient-to-tr  from-black/70 via-black to-black/60 bg-clip-text text-center text-3xl font-bold text-transparent dark:from-zinc-400/10 dark:via-white/90 dark:to-white/20  sm:text-5xl md:text-6xl lg:text-7xl">
            Gateway for people seek international job
          </h1>
          <p className="text-balance mb-10 mt-4 text-center text-muted-foreground md:text-lg lg:text-xl">
            The system will help you to find jobs for your needs. And the system will help you to check the job's requirements and qualifications.
          </p>
          <div className="flex justify-center gap-4">
            {/* <Button size="lg" variant="outline" asChild>
              <a href={githubUrl}>
                <GitHubLogoIcon className="mr-1 h-5 w-5" />
                GitHub
              </a>
            </Button> */}
            <Button size="lg" asChild>
              <Link href="/login">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto lg:max-w-screen-lg">
          <h1 className="mb-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
            <a id="features"></a> Features
          </h1>
          <p className="text-balance mb-10 text-center text-muted-foreground md:text-lg lg:text-xl">
            Lendana will help you to find jobs for your needs. 
            And the system will help you to check the job's requirements and qualifications.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {features.map((feature, i) => (
              <CardSpotlight
                key={i}
                name={feature.name}
                description={feature.description}
                logo={<feature.logo className="h-12 w-12" />}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

function NextjsIcon({ className }: { className?: string }) {
  return (
    <>
      <NextjsLight className={className + " dark:hidden"} />
      <NextjsDark className={className + " hidden dark:block"} />
    </>
  );
}
