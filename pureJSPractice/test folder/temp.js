const item = {
                code: "P01", 
                name: "Traditional Merlot", 
                description: "A bottle of middle weight wine, lower in tannins (smoother), with a more red-fruited flavor profile.", 
                price: 4.5, 
                selected: false
            };

let cartItemsFromCatalog = 

function addToCart(item) {
    this.setState({cartItemsFromCatalog: [...this.state.cartItemsFromCatalog, item]});
}

