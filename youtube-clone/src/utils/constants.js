const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const YOUTUBE_MOST_POPULAR_VIDEO_API = 
    'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='
    +
    YOUTUBE_API_KEY;

// export const YOUTUBE_VIDEO_DETAILS_API = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=xE_rMj35BIM&key=YOUR_KEY'

export const YOUTUBE_SUGGESTION_VIDEO_API = 
    'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Query'