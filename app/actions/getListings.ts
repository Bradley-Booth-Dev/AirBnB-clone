import primsa from "@/app/libs/primsadb";

export async function getListings() {
  try {
    const listings = await primsa.listing.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return listings;
  } catch (error: any) {
    throw new Error(error);
  }
}
