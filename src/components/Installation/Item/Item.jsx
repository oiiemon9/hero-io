import React, { useContext, useEffect, useState } from 'react';
import DownloadImg from '../../../assets/icon-downloads.png';
import RatingImg from '../../../assets/icon-ratings.png';
import { InstallContext } from '../../../GlobalProvider/GlobalProvider';

const Item = ({ data, installedApp }) => {
  const { handelUninstall } = useContext(InstallContext);
  const { image, title, downloads, reviews, size, id } = data;
  const [downloadFormate, setDownloadFormat] = useState('');
  const [reviewsFormate, setReviewsFormat] = useState('');

  useEffect(() => {
    const dow = formetNumber(downloads);
    const rev = formetNumber(reviews);
    setDownloadFormat(dow);
    setReviewsFormat(rev);
  }, [installedApp]);

  const formetNumber = (number) => {
    if (number >= 1_000_000_000) {
      return (number / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    if (number >= 1_000_000) {
      return (number / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (number >= 1_000) {
      return (number / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return number.toString();
  };

  return (
    <div className="bg-white p-4 rounded shadow flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="h-20 w-20">
          <img
            className="h-full w-full object-cover rounded-2xl"
            src={image}
            alt=""
          />
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">{title}</h4>
          <div className="flex items-center gap-5 text-slate-600">
            <div className="flex items-center gap-1">
              <div>
                <img className="w-5" src={DownloadImg} alt="" />
              </div>
              <p>{downloadFormate}</p>
            </div>
            <div className="flex items-center gap-1">
              <div>
                <img className="w-5" src={RatingImg} alt="" />
              </div>
              <p>{reviewsFormate}</p>
            </div>
            <div className="flex items-center gap-1">
              <p>{size} MB</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <button
          onClick={() => handelUninstall(id, title)}
          className="btn btn-accent text-white"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default Item;

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
