import Image from "next/image";

export const EmptySearch = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src={"/no_search.svg"}
        alt="no search result"
        height={360}
        width={360}
      />
      <h2 className="text-2xl font-semibold mt-6">No result found !</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try searching for something else
      </p>
    </div>
  );
};
