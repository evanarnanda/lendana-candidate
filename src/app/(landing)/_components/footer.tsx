import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { ThemeToggle } from "@/components/theme-toggle";

const githubUrl = "https://github.com/evanarnanda/lendana-candidate";
const twitterUrl = "https://twitter.com/evanarnanda";

export const Footer = () => {
  return (
    <footer className="px-4 py-6">
      <div className="container flex items-center p-0">
        {/* <CodeIcon className="mr-2 h-6 w-6" /> */}
        {/* <p className="text-sm">
          Built by{" "}
          <a className="underline underline-offset-4" href={twitterUrl}>
            Dmedia
          </a>
          . Get the source code from{" "}
          <a className="underline underline-offset-4" href={githubUrl}>
            GitHub
          </a>
          .
        </p> */}
        <p className="text-balance mt-4 text-center text-muted-foreground dark:text-white">
          Got questions or need help? Our friendly support team is here for you every step of the way.
        </p>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
      <div>
        <a href="mailto:support@lendana.com" className="flex items-center">
          <EnvelopeClosedIcon className="mr-2" />
          support@lendana.com
        </a>
      </div>
    </footer>
  );
};
