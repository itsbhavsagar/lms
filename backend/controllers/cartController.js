import User from '../models/User.js';

// Add to cart
export const addToCart = async (req, res, next) => {
  try {
    const { courseId } = req.body;
    const userId = req.user.id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (!user.cart.includes(courseId)) {
      user.cart.push(courseId);
      await user.save();
    }
    const updatedUser = await User.findById(userId).populate('cart');

    res.status(200).json(updatedUser.cart);
  } catch (error) {
    next(error);
  }
};

// Remove from cart
export const removeFromCart = async (req, res, next) => {
  try {
    const { courseId } = req.body;
    const userId = req.user.id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.cart = user.cart.filter((id) => id && id.toString() !== courseId);

    await user.save();
    const updatedUser = await User.findById(userId).populate('cart');

    res.status(200).json(updatedUser.cart);
  } catch (error) {
    next(error);
  }
};

// Get cart
export const getCart = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId).populate('cart');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user.cart);
  } catch (error) {
    next(error);
  }
};

// Clear cart
export const clearCart = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.cart = [];
    await user.save();

    res.status(200).json([]);
  } catch (error) {
    next(error);
  }
};
