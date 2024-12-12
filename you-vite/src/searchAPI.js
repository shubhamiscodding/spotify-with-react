// const apiKey = "AIzaSyCbz1KaG_SaB2F-S2j4wssv8yuqtM8hsoA"; // Replace with your YouTube API key

// // Function to fetch videos from the YouTube API
// export const fetchVideos = async (searchTerm) => {
//   const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
//     searchTerm
//   )}&type=video&maxResults=5&key=${apiKey}`;

//   try {
//     const response = await fetch(apiUrl);
//     if (!response.ok) throw new Error(`Error: ${response.statusText}`);
//     const videoData = await response.json();
//     return videoData.items;
//   } catch (err) {
//     console.error(err);
//     throw new Error("Failed to fetch videos. Please try again later.");
//   }
// };
