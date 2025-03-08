import User from '../models/User.js';

// Add to cart
export const addToCart = async (req, res, next) => {
  try {
    const { courseId } = req.body;
    const userId = req.user.id;
    console.log('Adding course to cart:', courseId, 'for user:', userId);

    const user = await User.findById(userId);
    if (!user) {
      console.log('User not found:', userId);
      return res.status(404).json({ message: 'User not found' });
    }

    if (!user.cart.includes(courseId)) {
      user.cart.push(courseId);
      await user.save();
    }
    const updatedUser = await User.findById(userId).populate('cart');
    console.log('Updated cart after add:', updatedUser.cart);
    res.status(200).json(updatedUser.cart);
  } catch (error) {
    console.error('Add to cart error:', error);
    next(error);
  }
};

// Remove from cart
export const removeFromCart = async (req, res, next) => {
  try {
    const { courseId } = req.body;
    const userId = req.user.id;
    console.log('Removing course from cart:', courseId, 'for user:', userId);

    const user = await User.findById(userId);
    if (!user) {
      console.log('User not found:', userId);
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('Current cart before filter:', user.cart);

    // Handle null values in cart
    user.cart = user.cart.filter((id) => id && id.toString() !== courseId);
    console.log('Updated cart after filter:', user.cart);

    await user.save();
    const updatedUser = await User.findById(userId).populate('cart');
    console.log('Populated cart after remove:', updatedUser.cart);
    res.status(200).json(updatedUser.cart);
  } catch (error) {
    console.error('Remove from cart error:', error);
    next(error);
  }
};

// Get cart
export const getCart = async (req, res, next) => {
  try {
    const userId = req.user.id;
    console.log('Fetching cart for user:', userId);

    const user = await User.findById(userId).populate('cart');
    if (!user) {
      console.log('User not found:', userId);
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('Fetched cart:', user.cart);
    res.status(200).json(user.cart);
  } catch (error) {
    console.error('Get cart error:', error);
    next(error);
  }
};
