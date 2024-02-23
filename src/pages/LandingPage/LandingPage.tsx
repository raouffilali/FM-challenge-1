const LandingPage = () => {
  return (
    <>
      <section className="container mx-auto lg:mt-8 flex flex-col lg:max-w-[70%]  space-y-3 sm:mt-0  ">
        {/* Image Div */}
        <div className="mb-12 w-full">
          <img
            src="/src/assets/image-omelette.jpeg"
            alt="omelette-image"
            className="w-full lg:rounded-[20px] sm:rounded-none"
          />
        </div>
        {/* Image Div */}
        <div className="flex flex-col space-y-6 px-6 lg:px-0 lg:space-y-4 h-screen">
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
          {/* Ingredients */}
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
              <li className="text-sm lg:text-lg px-5 ">
                <span className="text-neutral-wenge-brown font-semibold">
                  Optional fillins: cheese, decied vegetables, cooked meats,
                  herbs
                </span>
              </li>
            </ul>
          </div>
          <hr className="border-neutral-wenge-brown opacity-10" />
          {/* Instructions */}
          <div className="mb-4 lg:mt-10">
            <h1 className="text-2xl lg:text-3xl font-young-serif text-primary-nutmeg mb-2 lg:mb-6 lg:mt-10">
              Instructions
            </h1>
            <ol className=" list-decimal list-inside  text-primary-nutmeg mt-2 mb-12 font-bold ">
              <li className="text-sm lg:text-lg px-5  mb-2  ">
                <span className=" text-neutral-wenge-brown ">
                  Beat the eggs:
                </span>{" "}
                <span className="text-neutral-wenge-brown font-semibold">
                  In a bowl, beat the eggs with a pinch of salt and pepper until
                  they are well mixed. You can add a tablespoon of water or milk
                  for a fluffier texture
                </span>{" "}
              </li>
              <li className="text-sm lg:text-lg px-5 mb-2 ">
                <span className=" text-neutral-wenge-brown">Heat the pan:</span>{" "}
                <span className="text-neutral-wenge-brown font-semibold">
                  Place a non-stick frying pan over medium heat and add butter
                  or oil.
                </span>{" "}
              </li>
              <li className="text-sm lg:text-lg px-5 mb-2 ">
                <span className=" text-neutral-wenge-brown ">
                  Cook the omelette:
                </span>{" "}
                <span className="text-neutral-wenge-brown font-semibold">
                  Once the butter is melted and bubbling, pour in the eggs. Tilt
                  the pan to ensure the eggs evenly coat the surface.
                </span>{" "}
              </li>
              <li className="text-sm lg:text-lg px-5 mb-2  ">
                <span className=" text-neutral-wenge-brown ">
                  Add fillings (optional):
                </span>{" "}
                <span className="text-neutral-wenge-brown font-semibold">
                  When the eggs begin to set at the edges but are still slightly
                  runny in the middle, sprinkle your chosen fillings over one
                  half of the omelette.
                </span>{" "}
              </li>
              <li className="text-sm lg:text-lg px-5 mb-2">
                <span className=" text-neutral-wenge-brown  ">
                  Fold and serve:
                </span>{" "}
                <span className="text-neutral-wenge-brown font-semibold">
                  As the omlette countinues to cook carefullyl lift one edge and
                  fold it over the fillings.Let it cook for another minute, then
                  slid it onto a plate
                </span>{" "}
              </li>
              <li className="text-sm lg:text-lg px-5 mb-2">
                <span className=" text-neutral-wenge-brown ">Enjoy:</span>{" "}
                <span className="text-neutral-wenge-brown font-semibold">
                  Serve hot, with additional salt and pepper if needed.{" "}
                </span>{" "}
              </li>
            </ol>
          </div>
          <hr className="border-neutral-wenge-brown opacity-10" />
          {/* Nutrition */}
          <div className="mb-4 lg:mt-10 pb-24">
            <h1 className="text-2xl lg:text-3xl font-young-serif text-primary-nutmeg mb-2 lg:mb-6 lg:mt-10">
              Nutrition
            </h1>
            <p className="font-semibold text-neutral-wenge-brown mb-4 lg:mb-6">
              The table bellow shows nutritional values per serving without the
              additional fillings.
            </p>
            <table className="border-collapse ">
              <tr>
                <td className="border-b  border-bcolor px-12 py-2 text-neutral-wenge-brown font-medium lg:w-full lg:text-left ">
                  Clories
                </td>
                <td className="border-b  border-bcolor px-12 py-2 text-primary-nutmeg font-bold  lg:w-full lg:text-center ">
                  277kcal
                </td>
              </tr>
              <tr>
                <td className="border-b  border-bcolor px-12 py-2 text-neutral-wenge-brown font-medium lg:w-full lg:text-left ">
                  Carbs
                </td>
                <td className="border-b  border-bcolor px-12 py-2 text-primary-nutmeg font-bold lg:w-full lg:text-center  ">
                  0g
                </td>
              </tr>
              <tr>
                <td className="border-b  border-bcolor px-12 py-2 text-neutral-wenge-brown font-medium lg:w-full lg:text-left ">
                  Protein
                </td>
                <td className="border-b  border-bcolor px-12 py-2 text-primary-nutmeg font-bold lg:w-full lg:text-center  ">
                  20g
                </td>
              </tr>
              <tr>
                <td className="border-b  border-bcolor px-12 py-2 text-neutral-wenge-brown font-medium lg:w-full lg:text-left ">
                  Fat
                </td>
                <td className="border-b  border-bcolor px-12 py-2 text-primary-nutmeg font-bold lg:w-full lg:text-center  ">
                  22g
                </td>
              </tr>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
