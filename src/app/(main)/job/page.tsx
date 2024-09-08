import React from "react"
import Image from 'next/image';
import { Button } from "@/components/ui/button";

export default async function JobPage() {
    return (
      <>
        <section className="mx-auto grid min-h-[calc(100vh-300px)] max-w-5xl flex-col  items-center justify-center gap-4 py-10 text-center  md:py-12">
          <div className="p-4">
            <h1 className="mb-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
                <a id="coming-soon"></a> Coming Soon
            </h1>
            <div className="mx-auto grid justify-center">
              <Image
                src="/images/coming_soon.png" // Path relative to the `public` directory
                alt="Description of Image"
                width={500}
                height={300}
              />
            </div>
            <p className="text-balance mb-10 mt-4 text-center text-muted-foreground md:text-lg lg:text-xl">
                We're working hard to bring you something amazing! Stay tuned for updates.
            </p>
            <Button variant="secondary">Back to main page</Button>
          </div>
        </section>
      </>
    );
  }
