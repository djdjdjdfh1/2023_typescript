// let data = {
//     name: '찬이네 식당',
//     category: 'western',
//     address: {
//       city: 'busan',
//       detail: 'somewhere',
//       zipCode: 23425634
//     },
//     menu : [{name: 'rose pasta', price: 20000, category: 'PASTA'},{name: 'garlic steak', price: 30000, category: "STEAK"}]
//   }

export type Restaurant = {
    name: string;
    category: string;
    address: {
        city: string;
        detail: string;
        zipCode: number; 
    },
    menu: {
        name: string;
        price: number;
        category: string;
    }[]
}

export type Address = {
    city: string;
    detail: string;
    zipCode: number; 
}

export type Menu = {
    name: string;
    price: number;
    category: string; 
}

export type AddressWithoutZip = Omit<Address, 'zipCode'>

export type RestaurantOnlyCategory = Pick<Restaurant, 'category'>