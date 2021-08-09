import React from "react";

import HornedBeast from "./HornedBeast";

import hornsData from "./hornsData.json";



class Main extends React.Component {
  render() {
    return (
      <>
        {hornsData.map((item) => {
          return (
            <HornedBeast
              key={Math.random()}
              title={item.title}
              imgeUrl={item.image_url}
              description={item.description}
              horns= {item.horns}
              keyword={item.keyword}
            />
          );
        })}
      </>
    );
  }
}

export default Main;
