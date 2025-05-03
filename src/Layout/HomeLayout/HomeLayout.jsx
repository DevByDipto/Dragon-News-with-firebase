import React from "react";
import { Outlet } from "react-router";
import Header from "../../component/Header/Header";
import LatestNews from "../../component/LatestNews/LatestNews";
import Navber from "../../component/Navber/Navber";
import LeftAsid from "../../component/HomeLayout/LeftAsid";
import RightAsid from "../../component/HomeLayout/RightAsid";

const HomeLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Header></Header>
      <section>
        <LatestNews></LatestNews>
      </section>
      <Navber></Navber>
      <main className="my-5 grid grid-cols-12 gap-5">
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftAsid></LeftAsid>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
<RightAsid></RightAsid>
        </aside>
        <section className="right-nav"></section>
      </main>
    </div>
  );
};

export default HomeLayout;
