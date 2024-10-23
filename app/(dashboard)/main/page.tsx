import Image from "next/image";

const Page = () => {
  return (
    <div className="w-full h-full p-2">
      <h1 className="text-3xl text-center">Welcome to Cook App!</h1>
      <p className="text-secondary text-center">
        if you cant cook, you in the right place.
      </p>
      <div className="pt-6">
        <Image
          src={"/main_page/mainPagePhoto1.jpg"}
          alt="citchen"
          width={400}
          height={300}
          className="float-left m-2"
        />
        <p className="indent-8 leading-loose">
          Are you ready to take your cooking skills to the next level? Whether
          you&apos;re a seasoned chef or just starting your culinary journey,
          our app is here to guide you every step of the way.
        </p>
        <p className="indent-8 leading-loose ">
          Discover new recipes, master essential techniques, and learn how to
          make delicious meals with ingredients you already have at home.
        </p>
        <div className="float-left p-6 border-t">
          <h2 className="font-sans indent-8 leading-loose text-2xl text-center">
            What We Offer:
          </h2>
          <ul className="list-inside space-y-4 list-disc">
            <li className="font-semibold">
              Easy-to-Follow Recipes:
              <span className="font-normal">
                Step-by-step instructions with visuals to help you create
                mouth-watering dishes effortlessly.
              </span>
            </li>
            <li className="font-semibold">
              Ingredient Search:
              <span className="font-normal">
                Got ingredients but don’t know what to make? Enter what you
                have, and we’ll suggest recipes tailored to your pantry.
              </span>
            </li>
            <li className="font-semibold">
              Personalized Suggestions:
              <span className="font-normal">
                Get recipe recommendations based on your preferences, dietary
                needs, and favorite cuisines.
              </span>
            </li>
            <li className="font-semibold">
              Cooking for any occasion:
              <span className="font-normal">
                Whether you&apos;re cooking for yourself, your family, or
                hosting a dinner party, we’ve got you covered with tips, tricks,
                and recipes to make every meal special.
              </span>
            </li>
          </ul>
        </div>

        <p>Start Cooking Today!</p>
      </div>
    </div>
  );
};

export default Page;
