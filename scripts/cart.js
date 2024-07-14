export let cart = JSON.parse(localStorage.getItem('cart'));



function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
};

// Add to cart functionality
export function addToCart(productId) {
    let matchingItem;
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity: 1
        })
    }
    saveToStorage();
};

export function removeItemCart(productId) {
    const index = cart.findIndex(cartItem => cartItem.productId === productId);
    if (index !== -1) {
        cart.splice(index, 1);
    }
    saveToStorage();
}
