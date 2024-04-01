import React from "react";
import HeaderTop from "./components/HeaderTop";
import Profile from "./components/Profile";
import SpotLight from "./components/SpotLight";
import LightHeaderTop from "./components/LightHeaderTop";
import LightProfile from "./components/LightProfile";
import LightSportLight from "./components/LightSportLight";

export default function Home() {
  return (
    <main>
        <div className="bg-black text-white">
          <HeaderTop />
          <Profile />
          <SpotLight />
      </div>

      <div className="bg-gray-100 text-black my-5">
          <LightHeaderTop />
          <LightProfile />
          <LightSportLight />
      </div>
    </main>
    

  );
}
