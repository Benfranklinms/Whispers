import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader?.spilt("")[1];

    if(!token) {
        return res.status(401).json({message: "You are not authenticated"});
    }

    try{
        const decoded = jwt.verift(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch(err) {
        return res.status(401).json({message: "Invalid token"});
    }
};

export default auth;