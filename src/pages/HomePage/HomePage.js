
import React, { Fragment } from "react";
import Accessories from "~/components/Accessories/Accessories";
import Banner from "~/components/Banner/Banner";
import Elegant from "~/components/Elegant/Elegant";
import Sliders from "~/components/Slider/Sliders";
import Strong from "~/components/Strong/Strong";
import Style from "~/components/Style/Style";
import './HomePage.css'
export default function HomePage() {

  return (
    <Fragment>
    <Banner/>
    <Sliders />
    <Style />
    <Strong />
    <Elegant />
    <Accessories />
  </Fragment>
)
};

