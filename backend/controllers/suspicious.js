import SuspiciousUser from '../models/suspiciousUser';
import Post from '../models/post';

export const getSuspiciousUser = async (req, res) => {
    try {
        const user = await SuspiciousUser.find();
        if (!suspicious) {
            return res.status(404).json({ message: 'No suspicious user found' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getUserPosts = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await SuspiciousUser.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'No user found' });
        }
        const userPost = await Post.find({userId: user._id}).sort({createdAt: -1}).populate({
            path: "userId",
            select: "-password",
        }).populate({
            path: "comments.postedBy",
            select: "-password",
        })
        res.status(200).json(userPost);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}