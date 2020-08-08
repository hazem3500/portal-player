const videosPerPage = 5;

export async function searchVimeo(query, next = '') {
    const res = await fetch(`https://api.vimeo.com/videos?query=${query}&per_page=${videosPerPage}`, {
      headers: {
        Authorization: `Bearer ${process.env.VIMEO_CLIENT_ID}`,
      },
    })
      .then(data => data.json())
    const videos = res.data.map(
      ({ link, name, resource_key, description, created_time, pictures }) => ({
        id: resource_key,
        title: name,
        description,
        publishedAt: created_time,
        thumbnail: pictures.sizes[3].link,
        url: link,
      }),
    );
    return {
      videos,
      next: res.page + 1,
    };
}

export async function queryYouTube(query, next = '') {
    const res = await fetch(
      `https://content.googleapis.com/youtube/v3/search?q=${query}&type=video&part=snippet&maxResults=${videosPerPage}&key=${process.env.YOUTUBE_API_KEY}&pageToken=${next}`,
    ).then(data => data.json());
    const videos = res.items.map(
      ({
        snippet: { title, description, publishedAt, thumbnails },
        id: { videoId: id },
      }) => ({
        id,
        title,
        description,
        publishedAt,
        thumbnail: thumbnails.high.url,
        url: `www.youtube.com/watch?v=${id}`,
      }),
    );
    return {
        videos,
        next: res.nextPageToken,
    };
}

export async function searchVideos(query, next = {}) {
  const data = await Promise.all([queryYouTube(query, next.youtube), searchVimeo(query, next.vimeo)]);
  const videos = data.flatMap(provider => provider.videos)
  return {
    videos,
    next: { youtube: data[0].next, vimeo: data[1].next },
  };
}