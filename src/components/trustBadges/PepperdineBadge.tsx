import * as React from "react";

type RatingStarsProps = {
  rating: number;
};

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <img
      key={index}
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4ada7151690075fb4eb78c638a4cde5887f9460416a93e1a47fca2cbfd95cfa?apiKey=3f283d68f3354a64be15a2f4226c7f63&"
      alt=""
      className="shrink-0 w-2.5 aspect-square fill-black"
    />
  ));
  return <>{stars}</>;
};

function PepperdineBadge() {
  return (
    <section className="flex flex-col justify-center bg-white rounded-xl border border-solid border-neutral-400 max-w-[250px] h-[54px]">
      <article className="flex gap-2 px-2 py-2 rounded-xl border border-solid border-zinc-300 max-md:flex-wrap max-md:px-1 max-h-[54px]">
        <div className="flex gap-1 my-auto">
          <div className="flex flex-col items-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5b5e6598e0c1cfe71994379a072cad18b7ab9e9e0c1b2896570ae6a3cde5585?apiKey=3f283d68f3354a64be15a2f4226c7f63&"
              alt=""
              className="z-10 aspect-[0.52] fill-neutral-800 w-[19px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/97518d54c173d549e060991eb29553611bff120b48d803bbc00dfdc0ba8e4408?apiKey=3f283d68f3354a64be15a2f4226c7f63&"
              alt=""
              className="w-3 aspect-[1.33] fill-neutral-800"
            />
          </div>
          <div className="text-xs leading-4 text-center text-neutral-800">
            Top 100
          </div>
          <div className="flex flex-col items-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b47f5b623e9e98ba902e12f9894a80cf200e6f88a4b94b03c8f735b2795c264a?apiKey=3f283d68f3354a64be15a2f4226c7f63&"
              alt=""
              className="z-10 aspect-[0.52] fill-neutral-800 w-[19px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/82a059e0d1ba702cb5e0c61ca26dc5b5802a7974bae36c4c5b14bb94d7346110?apiKey=3f283d68f3354a64be15a2f4226c7f63&"
              alt=""
              className="aspect-[1.25] fill-neutral-800 w-[12px]"
            />
          </div>
        </div>
        <div className="flex flex-auto gap-3 max-md:flex-wrap max-lg:max-w-full">
          <div className="flex-auto text-xs leading-4 text-neutral-800">
            Pepperdine University Most Fundable Companies.
          </div>
        </div>
      </article>
    </section>
  );
}

export default PepperdineBadge;
