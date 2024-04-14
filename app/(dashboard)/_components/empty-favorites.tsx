import Image from "next/image";

export const EmptyFavorites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center lg:mr-10">
      <Image
        src={"/no_boards.svg"}
        alt="no favourites"
        height={360}
        width={360}
      />
      <h2 className="text-2xl font-semibold mt-6">No Favorites !</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try after adding boards to favorites
      </p>
    </div>
  );
};
