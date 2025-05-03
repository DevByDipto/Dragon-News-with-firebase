import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "./NewsCard";

const CatagoryNews = () => {
  const [news, setNews] = useState([]);

  const { id } = useParams();
  const newesData = useLoaderData();

  useEffect(() => {   
    if (id == "1") {
      
      const trendingNews  = newesData.filter((data) => data.others.is_trending);
      // console.log(filterNewsssss);
      setNews(trendingNews );
      return
    }
    if (id == "0") {
      setNews(newesData);
      return
    }
    const filterNews = newesData.filter((data) => data.category_id == id);
    setNews(filterNews);
  }, [id]);

  // console.log(news[0]);

  return (
    <div>
      <h3>category news number: {id}</h3>

      <div className="space-y-4">
        {
          news.map((data)=> <NewsCard key={data.id} data={data}></NewsCard>)
        }
      </div>
    </div>
  );
};

export default CatagoryNews;
