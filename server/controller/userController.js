const User = require('../model/userModel');


const getAllUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    } catch(err){
        res.status(500).json({message: err.message})
    }
}

const createUser = async (req, res) => {
  try {
    const { name, email, mobile, gender, pincode, city, state } = req.body;

    // Basic validation
    if (!name || !email || !mobile || gender === undefined || !pincode || !city || !state) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const user = await User.create({
      name,
      email,
      mobile,
      gender,
      pincode,
      city,
      state,
    });

    res.status(201).json({ message: 'User created', user });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

const updateUser = async (req, res) => {
    try {
        const { name, email, mobile, gender, pincode, city, state } = req.body;
        const user = await User.findByIdAndUpdate(req.params.id, {
            name,
            email,
            mobile,
            gender,
            pincode,
            city,
            state
        }, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User updated', user });
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted', user });
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

module.exports = { getAllUsers, createUser, getUserById, updateUser, deleteUser };