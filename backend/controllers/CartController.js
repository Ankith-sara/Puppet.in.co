import userModel from "../models/UserModel.js"

// Add product to cart
const addToCart = async (req, res) => {
    try {
        const { userId, itemId, quantity = 1 } = req.body;

        if (!userId || !itemId) {
            return res.status(400).json({
                success: false,
                message: "userId and itemId are required"
            });
        }

        const userData = await userModel.findById(userId);
        if (!userData) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        let cartData = userData.cartData || {};

        // Increment quantity if product exists, otherwise set it
        cartData[itemId] = (cartData[itemId] || 0) + quantity;

        await userModel.findByIdAndUpdate(userId, { cartData });

        return res.json({
            success: true,
            message: "Product added to cart",
            cartData
        });
    } catch (error) {
        console.error("Error in addToCart:", error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Update product quantity in cart
const updateCart = async (req, res) => {
    try {
        const { userId, itemId, quantity } = req.body

        if (!userId || !itemId) {
            return res.status(400).json({ success: false, message: "userId, itemId and quantity are required" })
        }

        const userData = await userModel.findById(userId)

        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" })
        }

        let cartData = userData.cartData || {}

        if (!cartData[itemId]) cartData[itemId] = {}
        cartData[itemId] = quantity

        await userModel.findByIdAndUpdate(userId, { cartData })
        res.json({ success: true, message: "Product updated in cart", cartData })
    } catch (error) {
        console.error("Error in updateCart:", error)
        res.status(500).json({ success: false, message: error.message })
    }
}

// Get user cart data
const getUserCart = async (req, res) => {
    try {
        const { userId } = req.body

        if (!userId) {
            return res.status(400).json({ success: false, message: "userId is required" })
        }

        const userData = await userModel.findById(userId)

        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" })
        }

        let cartData = userData.cartData || {}
        res.json({ success: true, cartData })
    } catch (error) {
        console.error("Error in getUserCart:", error)
        res.status(500).json({ success: false, message: error.message })
    }
}

export { addToCart, updateCart, getUserCart }