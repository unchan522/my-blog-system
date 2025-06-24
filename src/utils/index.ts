// Function to validate and convert YouTube link to embed format
export const getValidEmbedLink = (link: string) => {
  if (link.includes('youtube.com/watch')) {
    const url = new URL(link);
    const videoId = url.searchParams.get('v');
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
  }
  return link;
};

// Function to extract YouTube video ID from a URL
export const extractYoutubeVideoId = (url: string): string | null => {
  try {
    const youtubeUrl = new URL(url);
    return youtubeUrl.searchParams.get('v');
  } catch (error) {
    return null;
  }
};
