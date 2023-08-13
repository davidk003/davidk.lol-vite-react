import React from "react";
import SectionText from "../components/SectionText";
import "./About.css";

const about_string: string =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Morbi tristique senectus et netus et malesuada fames ac. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Vitae nunc sed velit dignissim sodales ut eu sem integer. A diam maecenas sed enim ut sem viverra aliquet eget. Lacus luctus accumsan tortor posuere ac ut consequat. Senectus et netus et malesuada fames ac turpis egestas maecenas. Donec enim diam vulputate ut. Vel pretium lectus quam id leo in. Elit eget gravida cum sociis natoque. Nec ultrices dui sapien eget mi. Nunc non blandit massa enim nec dui nunc. Ut enim blandit volutpat maecenas volutpat. Mollis aliquam ut porttitor leo a. Augue ut lectus arcu bibendum at varius vel pharetra vel. Tellus elementum sagittis vitae et. Semper risus in hendrerit gravida rutrum quisque. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Hendrerit gravida rutrum quisque non tellus orci ac. Volutpat odio facilisis mauris sit. Vel eros donec ac odio tempor orci. At consectetur lorem donec massa sapien. Vitae tortor condimentum lacinia quis vel eros donec ac odio. Non blandit massa enim nec dui. Diam maecenas sed enim ut sem viverra. Tempor commodo ullamcorper a lacus. Gravida in fermentum et sollicitudin. Feugiat nibh sed pulvinar proin gravida hendrerit. Donec ac odio tempor orci dapibus ultrices in. Odio morbi quis commodo odio. Urna nec tincidunt praesent semper. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Faucibus nisl tincidunt eget nullam non nisi. Amet justo donec enim diam vulputate ut pharetra sit.";

export default function About(): React.ReactElement {
  return (
    <div className="about-page">
      <div className="header-wrapper">
        <h1 className="page-header"> About Me</h1>
        <div className="header-emoticon">👋</div>
      </div>
      <img src="profile.jpg"></img>
      <SectionText header="example" content={about_string}></SectionText>
    </div>
  );
}
