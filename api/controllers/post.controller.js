import jwt from "jsonwebtoken";
import db from "../lib/db.js";

export const getPosts = async (req, res) => {
  const query = req.query;
  try {
    const posts = await db.post.findMany({
      where: {
        city: query.city || undefined,
        type: query.type || undefined,
        property: query.property || undefined,
        bedroom: parseInt(query.bedroom) || undefined,
        price: {
          gte: parseInt(query.minPrice) || 0,
          lte: parseInt(query.maxPrice) || 10000000,
        },
      },
    });

    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to get Posts", error });
  }
};

export const getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await db.post.findUnique({
      where: { id },
      include: {
        postDetail: true,
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
      },
    });

    let userId;
    const token = req.cookies?.token;

    if (!token) {
      userId = null;
    } else {
      jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
        if (err) {
          userId = null;
          console.log("Not Authenticated");
        } else {
          userId = payload.id;
        }
      });
    }

    const savedPost = await db.savedPost.findUnique({
      where: {
        userId_postId: {
          postId: id,
          userId,
        },
      },
    });

    res.status(200).json({ ...post, isSaved: savedPost ? true : false });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get post" });
  }
};

export const addPost = async (req, res) => {
  const tokenUserId = req.userId;
  const body = req.body;

  try {
    const newPost = await db.post.create({
      data: {
        userId: tokenUserId,
        ...body.postData,
        postDetail: {
          create: body.postDetail,
        },
      },
    });
    res.status(200).json(newPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to create new post", error });
  }
};

export const updatePost = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;
  const body = req.body;

  try {
    const post = await db.post.findUnique({
      where: {
        id,
      },
    });

    if (post.userId !== tokenUserId) {
      return res.status(403).json({ message: "Not Authorized!" });
    }

    const updatedPost = await db.post.update({
      where: {
        id,
      },
      data: {
        ...body,
      },
    });

    res.status(200).json({ message: "Post updated", updatedPost });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update Post", error });
  }
};

export const deletePost = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;

  try {
    const post = await db.post.findUnique({
      where: {
        id,
      },
    });

    if (post.userId !== tokenUserId) {
      return res.status(403).json({ message: "Not Authorized!" });
    }

    await db.post.delete({
      where: {
        id,
      },
    });

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to delete Post", error });
  }
};
