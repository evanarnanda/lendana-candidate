import React from "react";
import Image from 'next/image'; // Use Next.js Image component for optimization

export default async function ComingSoon() {
  return (
    <>
      <section className="mx-auto grid min-h-[calc(100vh-300px)] max-w-5xl flex-col  items-center justify-center gap-4 py-10 text-center  md:py-12">
        <div className="p-4">
          <div>
            <h1>My Image</h1>
            <Image
              src="/images/coming_soon.png" // Path relative to the `public` directory
              alt="Description of Image"
              width={500}
              height={300}
            />
          </div>
          <p className="text-balance mb-10 mt-4 text-center text-muted-foreground md:text-lg lg:text-xl">
            The system will help you to find jobs for your needs. And the system will help you to check the job's requirements and qualifications.
          </p>
        </div>
      </section>
    </>
  );
}