declare interface House {
    id: number,
    name: string,
    imageUrls: string[],
    itinerary: {location: string}[],
    tags: string[],
    description: string,
    estimatedPrice: string
}