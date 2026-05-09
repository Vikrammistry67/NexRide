import { Redis } from 'ioredis';
import _config from './config.js';

const redis = new Redis({
    port: _config.REDIS_PORT,
    host: _config.REDIS_HOST,
    password: _config.REDIS_PASSWORD,
});

redis.on('connect', () => {
    console.log('Redis database connected successfully');
});

export default redis;