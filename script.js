document.addEventListener('DOMContentLoaded', function() {
    const productPrices = {
        // Your product prices here...
        'Necklaces': {
            'Circle Necklace': 200,
            'Silver Necklace with C Pendant': 200,
            'Silver Necklace with Cross': 150,
            'Smiley Silver Necklace': 100,
            'Teddy Necklace': 150,
            'Female Faces Necklace': 150,
            'Ice Chain': 300,
            'Ghost Necklace': 150,
            'Custom Face Necklace': 250,
            'Customized R5 Coin': 100,
            // Add more necklaces here
        },
        'Bracelets': {
            'Yinyang Bracelet': 40,
            'Smiley Bracelet': 60,
            'Evil Eye Bracelet': 50,
            'Silver Bracelet': 50,
            'Ghost Bracelet': 80,
            '8 Ball Bracelet': 50,
            'Personalised Couple Bracelets': 80,
            'Handmade Paracord Bracelet': 80,
            'Custom Couples Bracelets': 80,
            'Eagle Bracelet': 50,
            // Add more bracelets here
        },
        'Custom Pearls': {
            'A$ap Rocky Type Pearls': 350,
            'Plain Pearls': 80,
            'Butterfly Pearls': 80,
            '2 Piece Couples/Besties Necklace': 150,
            'Yin Yang Pearl Obsidian': 100,
            'Personalised Couple Bracelets': 80,
            'Pearls Bracelet': 80,
            'Custom Pearls': 80,
            'Custom Couples Bracelets': 80,
            // Add more custom pearls here
        },
        'Accessories': {
            'Y2K Beanies': 80,
            'Plain Pearls': 80,
            'Men Ring': 50,
            'Magnetic Earrings': 40,
            'New Fashion SportGlasses': 80,
            'A5 size Plaques': 200,
            'Custom Air Keyholder': 60,
            'Spider Beanie': 80,
            'Diamond Earrings': 40,
            'Earrings': 80,
            // Add more accessories here
        }
    };


    const deliveryFee = 60;

    const productSelect = document.getElementById('products');
    const deliveryCheckbox = document.getElementById('delivery');
    const totalDisplay = document.getElementById('total');
    const selectedProductsField = document.getElementById('selectedProducts');

    // Array to store selected products
    let selectedProducts = [];

    function calculateTotal() {
        let totalPrice = 0;
    
        // Calculate total price of selected products
        selectedProducts.forEach(item => {
            if (productPrices[item.category] && productPrices[item.category][item.name]) {
                totalPrice += productPrices[item.category][item.name] * item.quantity;
            } else {
                console.error(`Product price not found for category: ${item.category}, name: ${item.name}`);
            }
        });
    
        // Add delivery fee
        totalPrice += deliveryFee;
    
        // Update total display
        totalDisplay.textContent = `Total: R${totalPrice}`;
    
        // Update selected products field
        selectedProductsField.value = selectedProducts.map(item => `${item.category}: ${item.name} (x${item.quantity})`).join(', ');
    }
    
    // Add event listeners to update total when selection changes
    productSelect.addEventListener('change', function() {
        const selectedProduct = productSelect.value;
        console.log("Selected Product:", selectedProduct);
        if (selectedProduct) {
            // Extract category and name from selected option value
            const [name, price] = selectedProduct.split(' - ');
            const category = productSelect.selectedOptions[0].parentNode.label;
            console.log("Category:", category);
            console.log("Name:", name);
            // Check if the selected product already exists in the selectedProducts array
            const existingItemIndex = selectedProducts.findIndex(item => item.category === category && item.name === name);
            if (existingItemIndex !== -1) {
                // If it exists, increment the quantity
                selectedProducts[existingItemIndex].quantity++;
            } else {
                // If it doesn't exist, add it with quantity 1
                selectedProducts.push({ category, name, quantity: 1 });
            }
            calculateTotal();
            
            // Clear the selected product dropdown
            productSelect.selectedIndex = 0;
        }
    });

    deliveryCheckbox.addEventListener('change', calculateTotal);
});
