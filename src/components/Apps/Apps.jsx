import React, { useEffect, useState } from 'react';
import TrandingApp from '../Home/TrandingAppsSection/TrandingApp';
import { Link } from 'react-router';
import Loader from '../Loader/Loader';
import { CiSearch } from 'react-icons/ci';

const Apps = () => {
  const [appData, setAppData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [err, setErr] = useState();
  const [search, setSearch] = useState('');

  useEffect(() => {
    setLoader(true);
    const data = async () => {
      try {
        const dataFetch = await fetch('/appData.json');
        const res = await dataFetch.json();
        if (search) {
          const searchData = res.filter((data) =>
            data.title.toLowerCase().includes(search)
          );
          setAppData(searchData);
        } else {
          setAppData(res);
        }
      } catch (error) {
        setErr(error);
      } finally {
        setLoader(false);
      }
    };
    data();
  }, [search]);

  const handelSearch = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue.trim().toLowerCase());
  };

  return (
    <div className="max-w-[1440px] mx-auto px-2 my-20">
      <div className="text-center space-y-4">
        <h4 className="text-4xl font-bold">Our All Applications</h4>
        <p className="text-slate-600">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="my-5 flex justify-between">
        <h6 className="text-xl font-bold">( {appData.length} ) Apps Found</h6>
        <div className="max-w-72 w-full relative">
          <input
            onChange={handelSearch}
            type="search"
            placeholder="Search Apps "
            defaultValue={search}
            className="input ps-10 w-full"
          />
          <div className="absolute top-0 bottom-0 left-3 flex items-center z-1">
            <CiSearch className="text-xl" />
          </div>
        </div>
      </div>
      {loader ? (
        <Loader></Loader>
      ) : (
        <div>
          {appData.length === 0 && (
            <div>
              <h4 className="text-center text-4xl font-bold text-gray-500">
                No Apps Found
              </h4>
              <div className="flex justify-center mt-10">
                <Link
                  onClick={() => setSearch('')}
                  className="btn text-white bg-[linear-gradient(160deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)] px-10"
                >
                  Show All Apps
                </Link>
              </div>
            </div>
          )}
          <div className=" grid grid-cols-4 gap-5">
            {appData.map((application, i) => (
              <TrandingApp key={i} application={application}></TrandingApp>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Apps;

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
