const item=[{
        id: 1,
        name: 'acid-free paper',
        price: '$5.99',
    },
    {
        id: 2,
        name: 'printing paper',
        price: '$2.99',
    },
    {
        id: 3,
        name: 'three-hole-punch paper',
        price: '$7.99',
    },
    {
        id: 4,
        name: 'copy paper',
        price: '$2.99',
    },
    {
        id: 5,
        name: 'recycled paper',
        price: '$10.99',
    }
];

shoppingCart=[]

function cart(action, item, shoppingCart) {
    let new_cart=shoppingCart.slice()

    switch(action){
        case "add_to_cart":
            new_cart.push(item)
            return new_cart;
    
        case "remove_from_cart":
            
            if (new_cart.includes(item)){
                let itemIndex = new_cart.indexOf(item)
                new_cart.splice(itemIndex,1)
                
                return new_cart;            
            };
            return new_cart;
        
        case "remove_all_from_cart":
            let newCartWithout = []
            for(let item_in_cart of new_cart){
                if (item_in_cart!==item){
                    newCartWithout.push(item_in_cart)
                }
            }
            return newCartWithout;

        case "empty_cart":
            new_cart = [];
            
            return new_cart;
        
        default:
            console.log("Invalid action.") 
            break;
    };

};
