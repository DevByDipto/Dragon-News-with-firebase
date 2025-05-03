import React, { use } from "react";
import Marquee from "react-fast-marquee";
import { AuthContext } from "../../Context/AuthProvider";
import { useLoaderData } from "react-router";

const LatestNews = () => {
  const { user } = use(AuthContext);
  const news = useLoaderData()
  console.log(news);


  return (
    <div className="bg-base-200 p-5 flex items-center gap-4">
       <div>
    {[
      <p>Title 1</p>,
      <p>Title 2</p>,
      <p>Title 3</p>
    ]}
  </div>
      <p className="text-white px-4 py-2 bg-secondary">Latest</p>
      <Marquee speed={100} pauseOnHover={true}>
        {
          news.map((data)=> <p>{data.title}........</p>)
                 }
      </Marquee>
    </div>
  );
};

export default LatestNews;
