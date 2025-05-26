import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        //Normally u use ip adress or user id to limit requests
        // Here we are using a static key for demonstration purposes
        const {success} = await ratelimit.limit("my-rate-limit"); // Limit to 10 requests per minute
        
        if (!success) {
            return res.status(429).json({ error: 'Too many requests, please try again later.' });
        }
    } catch (error) {
        console.error('Rate limiter error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default rateLimiter;