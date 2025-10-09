import React, { useEffect, useState } from 'react';
import Download from './../../../assets/icon-downloads.png';
import RatingImg from './../../../assets/icon-ratings.png';
import { Link } from 'react-router';

const App = ({ application }) => {
  const { image, title, downloads, ratingAvg, id } = application;
  const [downloadFormat, setDownloadFormat] = useState('');

  useEffect(() => {
    if (downloads >= 1000000000) {
      const formate = (downloads / 1000000000).toFixed(1) + 'B';
      setDownloadFormat(formate);
      return;
    } else if (downloads >= 1000000) {
      const formate = (downloads / 1000000).toFixed(1) + 'M';
      setDownloadFormat(formate);
      return;
    } else if (downloads >= 1000) {
      const formate = (downloads / 1000).toFixed(1) + 'K';
      setDownloadFormat(formate);
      return;
    } else {
      setDownloadFormat(downloads.toString());
      return;
    }
  }, []);

  return (
    <Link
      to={`/app/${id}`}
      className="bg-base-100 shadow-sm p-4 rounded-xl hover:-translate-y-3 transition duration-300 ease-in-out"
    >
      <div className="flex items-center justify-center">
        <figure className="h-[316px] max-w-[316px] w-full">
          <img
            className="h-full w-full object-contain rounded-2xl"
            src={image}
          />
        </figure>
      </div>
      <div className="mt-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="flex justify-between mt-5">
          <div className="flex items-center gap-2 px-2 py-1 bg-green-50 rounded-lg border border-gray-200">
            <img className="w-4" src={Download} alt="" />
            <p className="text-green-600">{downloadFormat}</p>
          </div>
          <div className="flex items-center gap-2 px-2 py-1 bg-yellow-50 rounded-lg border border-gray-200">
            <img className="w-4" src={RatingImg} alt="" />
            <p className="text-yellow-600">{ratingAvg}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default App;

// {
//   "image": "https://play-lh.googleusercontent.com/6MtUcsS5i95q92P6NbHTGzJT6hs6cJANaMHXfW5nco5_hDOnF1AC3A5lgH3Ik3MARAry",
//   "title": "YouTube",
//   "companyName": "Google LLC",
//   "id": 4,
//   "description": "YouTube is the world’s largest video-sharing platform, enabling users to watch, create, and interact with a vast array of content. It hosts millions of videos covering every imaginable topic, from music and movies to educational tutorials and personal vlogs. Creators can build audiences, monetize content, and share their perspectives with a global community, while viewers can discover new content through personalized recommendations and curated playlists. The platform also supports live streaming, premieres, and community posts, providing diverse engagement options. YouTube’s sophisticated algorithm ensures that users receive relevant content tailored to their interests, while its comment and sharing features encourage interaction and discussion. Additionally, YouTube offers YouTube Shorts, a short-form video format, to capture the growing demand for quick, engaging videos. With accessibility on desktop, mobile, and smart TVs, YouTube has become an indispensable part of digital entertainment, learning, and content creation for millions of people worldwide.",
//   "size": 240,
//   "reviews": 72000000,
//   "ratingAvg": 4.4,
//   "downloads": 10000000000,
//   "ratings": [
//     { "name": "1 star", "count": 2500000 },
//     { "name": "2 star", "count": 3000000 },
//     { "name": "3 star", "count": 5000000 },
//     { "name": "4 star", "count": 10000000 },
//     { "name": "5 star", "count": 51500000 }
//   ]
// },
