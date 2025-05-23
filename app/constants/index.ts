// House data on location selected (Price you can change if you want)
export const addresses = [
    {
        id: 1,
        name: "Clearwater Beach",
        imageUrls: ['Clearwater-Beach.jpg', 'Clearwater-home.jpg', 'Clearwater-home2.jpg', 'Clearwater-home3.jpg', 'Clearwater-home5.jpg' ,'Clearwater-home6.jpg', 'Clearwater-home7.jpg', 'Clearwater-home8.jpg', 'Clearwater-home4.jpg'],
        itinerary: [{location:"Clearwater"}],
        tags: [' Ocean view |', ' Wifi |', ' Free Parking |', ' Sea view |', ' TV |', ' Free washer |', ' Shared Beach access |', ' Kitchen |' , ' Dedicated workspace '],
        address: "9 Cambria St. Clearwater, FL 33767",
        description: "5 guests . 2 bedrooms . 4 beds . 2 baths",
        estimatedPrice: ""
    },
    {
        id: 2,
        name: "Dunedin",
        imageUrls: ['Dunedin.jpg', 'Dunedin-LivingRoom.jpg', 'Dunedin-LivingRoom2.jpg', 'Dunedin-Kitchen.jpg', 'Dunedin-DiningRoom.jpg', 'Dunedin-Bedroom1.jpg', 'Dunedin-Bedroom2.jpg', 'Dunedin-Bedroom3.jpg', 'Dunedin-Bedroom4.jpg', 'Dunedin-Bedroom5.jpg', 'Dunedin-Bathroom1.jpg', 'Dunedin-Bathroom2.jpg', 'Dunedin-Bathroom3.jpg', 'Dunedin-Bathroom4.jpg', 'Dunedin-Bathroom5.jpg', 'Dunedin-Bathroom6.jpg', 'Dunedin-Laundryroom.jpg', 'Dunedin-Backyard.jpg'],
        itinerary: [{location:"Dunedin"}],
        tags: ['Lake access |', ' Wifi |', ' Washer |', ' TV |', ' Kitchen |', ' Dedicated Workspace |', ' Free Parking |', ' Air conditioning |', ' Free Dryer |'],
        address: "Pinewood Dr. Dunedin, FL 34698",
        description: "12 guests . 5 bedrooms . 8 beds . 5.5 baths",
        estimatedPrice: ""
    },
    {
        id: 3,
        name: "Tarpon Springs",
        imageUrls: ['Tarpon-Springs.jpg', 'Tarpon-Springs-LivingRoom.jpg', 'Tarpon-Springs-DiningRoom.jpg', 'Tarpon-Springs-Kitchen.jpg', 'Tarpon-Springs-Gameroom.jpg', 'Tarpon-Springs-UtilityRoom.jpg', 'Tarpon-Springs-Bedroom1.jpg', 'Tarpon-Springs-Bedroom2.jpg', 'Tarpon-Springs-Bedroom3.jpg', 'Tarpon-Springs-Bathroom1.jpg','Tarpon-Springs-Bathroom2.jpg', 'Tarpon-Springs-Outdoor1.jpg', 'Tarpon-Springs-Outdoor2.jpg'],
        itinerary: [{location:"Tarpon Springs"}],
        tags: [' Shared Beach access |', ' Fast Wifi - 335 Mbps |', ' Free Parking |', ' 65 inch HDTV with streaming services |', ' Exterior security cameras |', ' Kitchen |', ' Dedicated workspace |', ' Pets allowed |', ' Free washer'],
        address: "Riverside Dr. Tarpon Springs, FL 34689",
        description: "8 guests . 3 bedrooms . 5 beds . 2 baths",
        estimatedPrice: ""
    },
    {
        id: 4,
        name: "Waynesville",
        imageUrls: ['Waynesville.jpg', 'Waynesville-Backyard.jpg', 'Waynesville-Living-Room.jpg', 'Waynesville-Kitchen.jpg', 'Waynesville-Dining.jpg', 'Waynesville-Bedroom1.jpg', 'Waynesville-Bedroom2.jpg', 'Waynesville-Bedroom3.jpg', 'Waynesville-Bedroom4.jpg', 'Waynesville-Bathroom1.jpg', 'Waynesville-Bathroom2.jpg', 'Waynesville-Bathroom3.jpg', 'Waynesville-Gameroom.jpg', 'Waynesville-Exterior.jpg', 'Waynesville-Hottub.jpg'],
        itinerary: [{location:"North Carolina"}],
        tags: [' Waterfront |', ' Wifi |', ' Free Parking |', ' Pets allowed |', ' Washer |', ' Kitchen |', ' Dedicated workspace |', ' Hot tub |', 'HDTV with Roku and streaming services |', ' Exterior security cameras'],
        address: "Brushy Creek Ln. Waynesville, NC 28786",
        description: "8 guests . 4 bedrooms . 5 beds . 3 baths",
        estimatedPrice: ""
    },
]

// Location details and photos on Home page
export const locations = [{
    id: 1,
    name: "Clearwater Beach",
    imageUrl: ['/assets/images/Clearwater-Beach.jpg'],
    location: "Clearwater, FL",
    tags: ['5 guests . 2 bedrooms . 4 beds . 2 baths']
},
    {
        id: 2,
        name: "Dunedin Beach",
        imageUrl: ['/assets/images/Dunedin.jpg'],
        location: "Dunedin, FL",
        tags: ['12 guests . 5 bedrooms . 8 beds . 5.5 baths']
    },
    {
        id: 3,
        name: "Tarpon Springs",
        imageUrl: ['/assets/images/Tarpon-Springs.jpg'],
        location: "Tarpon Springs, FL",
        tags: ['8 guests . 3 bedrooms . 5 beds . 2 baths']
    },
    {
        id: 4,
        name: "Waynesville",
        imageUrl: ['/assets/images/Waynesville.jpg'],
        location: "Waynesville, North Carolina",
        tags: ['8 guests . 4 bedrooms . 5 beds . 3 baths']
    },
]

