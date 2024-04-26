"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import robot from "@/public/images/robot.gif";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[64px] font-bold text-black dark:text-fuchsia-600`}
            >
              $NANiEKO Token on Pump.fun
            </span>
            <p className="pb-6 font-medium">
            Hi! my name is Nanie, I am a solo Solana Meme Token creator, an independent 2D animator. I use my magic touch to bring images to life. And I present to you $NANIEKO the cutest CAT token on Solana!
            </p>
            <p className="pb-6 font-medium">
            Instead of having a PreSale we decided to launch using Alons Pump.fun
            </p>

            <div className="">
              <Button size="xl" className="w-full font-bold" variant="brand">
                <a
                  href="https://pump.fun/board"
                  target="_blank"
                  rel="noreferrer"
                  className="pb-1 dark:text-zinc-800 text-zinc-100"
                >
                  Buy From Pump.fun
                </a>{" "}
              </Button>
            </div>
          </div>
        </Wrapper>
      </section>

      {/* second half */}

      <section className="hidden lg:flex h-screen w-full flex-col justify-center items-center bg-[#FFCCFF] p-9">
        <Image src={robot} alt="Man sitting in wheelchair" />
      </section>
    </section>
  );
}
