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
import {HeroParallax} from "src/components/ui/hero-parallax";
// import HeroParallax from "../components/ui/hero-parallax";

export const metadata: Metadata = {
  title: "Gateway for people seek international job | Lendana",
  description:
    "We give you a gateway for people seeking international job. We are a platform that connects people seeking international job with employers.",
};

export const products = [
    {
        "title": "🇹🇼 Taiwan",
        "link": "https://en.wikipedia.org/wiki/Taiwan",
        "thumbnail": "/images/taiwan.png"
    },
    {
        "title": "🇭🇰 Hongkong",
        "link": "https://en.wikipedia.org/wiki/Hong_Kong",
        "thumbnail": "/images/hongkong.png",
    },
    {
        "title": "🇨🇳 China",
        "link": "https://en.wikipedia.org/wiki/China",
        "thumbnail": "/images/china.png"
    },
    {
        "title": "🇲🇾 Malaysia",
        "link": "https://en.wikipedia.org/wiki/Malaysia",
        "thumbnail": "/images/malaysia.png"
    },
    {
        "title": "🇰🇷 South Korea",
        "link": "https://en.wikipedia.org/wiki/South_Korea",
        "thumbnail": "/images/south-korea.png"
    },
    {
        "title": "🇯🇵 Japan",
        "link": "https://en.wikipedia.org/wiki/Japan",
        "thumbnail": "/images/japan.png"
    },
    {
        "title": "🇸🇦 Saudi Arabia",
        "link": "https://en.wikipedia.org/wiki/Saudi_Arabia",
        "thumbnail": "/images/saudi-arabia.png"
    },
    {
        "title": "🇮🇹 Italy",
        "link": "https://en.wikipedia.org/wiki/Italy",
        "thumbnail": "/images/italy.png"
    },
    {
        "title": "🇵🇱 Poland",
        "link": "https://en.wikipedia.org/wiki/Poland",
        "thumbnail": "/images/poland.png"
    },
    {
        "title": "🇹🇷 Turkey",
        "link": "https://en.wikipedia.org/wiki/Turkey",
        "thumbnail": "/images/turkey.png",
    }
];

// const githubUrl = "https://github.com/evanarnanda/lendana-candidate";

// const features = [
//   {
//     name: "Resume",
//     description: "We provide auto generate resume for you. You can easily share to public or privately.",
//     logo: NextjsIcon,
//   },
//   {
//     name: "Job Seeker",
//     description: "By using Lendana, you can easily find jobs for your needs. And the system will help you to check the job's requirements and qualifications.",
//     logo: ReactJs,
//   },
//   {
//     name: "Recruiters",
//     description: "We provide a platform for recruiters to manage their job postings and applicants. You can easily apply for jobs and track the status of your applications.",
//     logo: LuciaAuth,
//   },
// ];

const HomePage = () => {
  return (
    <>
      <section className="mx-auto grid min-h-[calc(100vh-300px)] flex-col  items-center justify-center gap-4 py-10 text-center  md:py-12">
        {/* Background Image */}
        <div className="p-4">
          <div className="absolute inset-0 -z-10 bg-[url('/images/half-earth-light.svg')] dark:bg-[url('/images/half-earth-dark.svg')] bg-cover bg-center bg-no-repeat"></div>
          <div className="max-w-7xl relative mx-auto py-10 md:py-4 px-4 left-0 top-0">
            <h1 className="text-center text-xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
              <span className="text-blue-300">Your Gateway</span>
              <span className="text-blue-800 dark:text-white"> to Overseas Work Opportunities</span>
            </h1>
            <p className="text-balance mb-10 mt-4 text-center text-muted-foreground md:text-lg lg:text-xl dark:text-white">
              Discover the perfect job and grow your skills with our all-in-one platform, made for those ready to take their career abroad.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto grid min-h-[calc(100vh-300px)] flex-col  items-center justify-center gap-4 py-10 text-center  md:py-12">
        {/* Background Image */}
        <div className="p-4 overflow-x-hidden">
          <HeroParallax products={products} />
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
