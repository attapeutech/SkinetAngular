namespace Core.Interfaces
{
    public interface IResponseCacheService
    {
        //Caching memory from Redis
         Task CacheResponseAsync(string cacheKey, object response, TimeSpan timeToLive);
         Task<string> GetCachedResponseAsync(string cacheKey);

    }
}