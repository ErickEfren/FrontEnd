import React from 'react';

export default function MissionVision() {
    return (
      <section className="mt-14 w-full max-w-[1160px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-6 py-10 w-full text-center text-black bg-neutral-100 max-md:px-5 max-md:mt-4 max-md:max-w-full">
              <h2 className="self-center text-2xl">Mission</h2>
              <p className="mt-9 text-base max-md:max-w-full">
                Our mission is to provide high-quality, ethically-made clothing while leading the way for sustainability in fashion.
              </p>
            </div>
          </article>
          <article className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-6 py-10 w-full text-center text-black bg-neutral-100 max-md:px-5 max-md:mt-4 max-md:max-w-full">
              <h2 className="self-center text-2xl">Vision</h2>
              <p className="mt-9 text-base max-md:max-w-full">
                Our mission is to provide high-quality, ethically-made clothing while leading the way for sustainability in fashion.
              </p>
            </div>
          </article>
        </div>
      </section>
    );
  }