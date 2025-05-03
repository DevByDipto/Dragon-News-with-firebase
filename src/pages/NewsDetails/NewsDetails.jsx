import React, { useEffect, useState } from "react";
import { Navigate, NavLink, useLoaderData, useNavigate, useParams } from "react-router";
import LeftAsid from "../../component/HomeLayout/LeftAsid";
import Header from "../../component/Header/Header";
import RightAsid from "../../component/HomeLayout/RightAsid";

const NewsDetails = () => {
  const [news, setNews] = useState();
  const data = useLoaderData();
  const { id } = useParams();
  const navigator = useNavigate()
// console.log(location);

  useEffect(() => {
    const selectedNews = data.find((news) => news.id == id);
    setNews(selectedNews);
  }, [id, data]);

  return (
    <div className="max-w-9/12 mx-auto">
      <Header></Header>
      <main className="grid grid-cols-12">
               <section className="col-span-9">
          <div className="space-y-8">
            <h3>Dragon News</h3>
            <img src={news?.image_url} alt="" />
            <h2>{news?.title}</h2>
            <p>{news?.details}</p>
            <button onClick={()=>navigator(`/categorie/${news.category_id}`)} className="bg-secondary px-4 py-2">
              All news in this category
            </button>

                     </div>
        </section>
        <aside className="col-span-3">
          <RightAsid></RightAsid>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
