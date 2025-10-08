import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import Loader from '../Loader/Loader';
import DownloadImg from '../../assets/icon-downloads.png';
import RatingImg from '../../assets/icon-ratings.png';
import ReviewImg from '../../assets/icon-review.png';
import Description from './Description/Description';
import RatingsChart from './RatingsChart/RatingsChart';
import { InstallContext } from '../../GlobalProvider/GlobalProvider';
import { CgLaptop } from 'react-icons/cg';

const AppInfo = () => {
  const id = useParams().id;
  const [appInfo, setAppInfo] = useState('');
  const [err, setErr] = useState('');
  const [loaderStatus, setLoaderStatus] = useState(true);
  const [isInstalled, setIsInstalled] = useState(false);
  const { install, setInstall, handelInstall } = useContext(InstallContext);
  const {
    image,
    title,
    companyName,
    downloads,
    reviews,
    ratingAvg,
    size,
    description,
    ratings,
  } = appInfo;
  useEffect(() => {
    setLoaderStatus(true);
    const data = async () => {
      try {
        const dataFetch = await fetch('/appData.json');
        const res = await dataFetch.json();
        const appInfoData = res.find((app) => app.id === parseInt(id));

        setAppInfo(appInfoData);
      } catch (error) {
        setErr(error);
      } finally {
        setLoaderStatus(false);
      }
    };
    data();
  }, []);
  useEffect(() => {
    const alreadyInstalled = install.some(
      (item) => parseInt(id) === parseInt(item)
    );
    console.log(alreadyInstalled);
    setIsInstalled(alreadyInstalled);
  }, [install]);

  return (
    <div className="max-w-[1440px] mx-auto px-2 my-20">
      {loaderStatus ? (
        <Loader></Loader>
      ) : (
        <div>
          {err && <p>{err.message}</p>}
          <div className="flex items-center gap-10">
            <div className="w-[350px]">
              <img className="w-full" src={image} alt="" />
            </div>
            <div className="flex-1 space-y-5">
              <div>
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="text-slate-600">
                  Developed by{' '}
                  <span className="bg-gradient-to-l from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent font-bold">
                    {companyName}
                  </span>
                </p>
              </div>
              <hr className="text-gray-300 w-full" />
              <div className="flex gap-5">
                <div className="space-y-2">
                  <div>
                    <img className="w-8" src={DownloadImg} alt="" />
                  </div>
                  <p>Downloads</p>
                  <h2 className="text-xl font-bold">{downloads}</h2>
                </div>
                <div className="space-y-2">
                  <div>
                    <img className="w-8" src={RatingImg} alt="" />
                  </div>
                  <p>Average Ratings</p>
                  <h2 className="text-xl font-bold">{ratingAvg}</h2>
                </div>
                <div className="space-y-2">
                  <div>
                    <img className="w-8" src={ReviewImg} alt="" />
                  </div>
                  <p>Total Reviews</p>
                  <h2 className="text-xl font-bold">{reviews}</h2>
                </div>
              </div>
              <div>
                <Link
                  onClick={() => handelInstall(id)}
                  disabled={isInstalled}
                  className="btn btn-accent text-white text-l"
                >
                  {isInstalled ? 'installed' : `Install Now (${size} MB)`}
                </Link>
              </div>
            </div>
          </div>
          <hr className="my-10 text-gray-300"></hr>
          <div>
            <RatingsChart ratings={ratings}></RatingsChart>
          </div>
          <div>
            <Description description={description}></Description>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppInfo;

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
