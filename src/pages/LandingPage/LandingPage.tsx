const LandingPage = () => {
  return (
    <>
      <section className="container mx-auto lg:mt-8 flex flex-col lg:max-w-[70%]  space-y-3 sm:mt-0 ">
        {/* Image Div */}
        <div className="mb-12 w-full">
          <img
            src="/src/assets/image-omelette.jpeg"
            alt="omelette-image"
            className="w-full lg:rounded-[20px] sm:rounded-none"
          />
        </div>
        {/* Image Div */}
        <div className="flex flex-col space-y-6 px-6 lg:px-0 lg:space-y-4">
          <h1 className="text-4xl lg:text-5xl font-young-serif">
            Simple Omlette Recipe
          </h1>
          <p className="font-outfit text-sm lg:text-xl text-neutral-wenge-brown">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          <div className="rounded-md bg-neutral-rose-white w-full px-6 py-4">
            <h4 className="text-primary-dark-raspberry font-outfit font-semibold">
              Preparation time
            </h4>
            {/* make unordred list with style of dot */}
            <ul className="list-disc list-inside text-primary-dark-raspberry mt-2">
              <li className="text-sm lg:text-lg px-5">
                <span className="font-semibold text-neutral-wenge-brown">
                  Totale:
                </span>{" "}
                <span className="text-neutral-wenge-brown">
                  Aproximatly 10 minutes
                </span>
              </li>
              <li className="text-sm lg:text-lg px-5">
                <span className="font-semibold text-neutral-wenge-brown">
                  Preparation:
                </span>{" "}
                <span className="text-neutral-wenge-brown">5 minutes</span>
              </li>
              <li className="text-sm lg:text-lg px-5">
                <span className="font-semibold text-neutral-wenge-brown">
                  Cooking:
                </span>{" "}
                <span className="text-neutral-wenge-brown">5 minutes</span>
              </li>
            </ul>
          </div>
          <div className="mb-4 lg:mt-10">
            <h1 className="text-2xl lg:text-3xl font-young-serif text-primary-nutmeg mb-2 lg:mb-6 lg:mt-10">
              Ingredients
            </h1>
            <ul className="list-disc list-inside text-primary-nutmeg mt-2 mb-12">
              <li className="text-sm lg:text-lg px-5 mb-2 font-semibold">
                <span className="text-neutral-wenge-brown">2-3 larg eggs</span>
              </li>
              <li className="text-sm lg:text-lg px-5 mb-2 font-semibold">
                <span className="text-neutral-wenge-brown">Salt, to taste</span>
              </li>
              <li className="text-sm lg:text-lg px-5 mb-2 font-semibold">
                <span className="text-neutral-wenge-brown">
                  Pepper, to taste
                </span>
              </li>
              <li className="text-sm lg:text-lg px-5 mb-2  font-semibold">
                <span className="text-neutral-wenge-brown">
                  1 tablespon of butter oroil
                </span>
              </li>
              <li className="text-sm lg:text-lg px-5 mb-2">
                <span className="text-neutral-wenge-brown font-semibold">
                  Optional fillins: cheese, decied vegetables, cooked meats,
                  herbs
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
