declare interface House {
    id: string,
    name: string,
    imageUrls: string[],
    itinerary: {location: string}[],
    tags: string[],
    address: string,
    description: string,
    estimatedPrice: string
}

// House Address interface with destructuring
declare interface HouseAddress {
    id: string;
    name: string;
    imageUrl: string;
    location: string;
    tags: string[];
    isGroupCard: boolean;
    groupId: string;
}