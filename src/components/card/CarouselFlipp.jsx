import React, { useEffect, useState } from "react";

import axios from "axios";
import CardFlipped from "./CardFlipped";
import "./CarouselFlipp.scss";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselFlipp = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [repos, setRepos] = useState([]);
  const getRepos = () => {
    axios
      .get("https://api.github.com/users/Leroyg-11/repos")
      .then((res) => {
        setRepos(res.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getRepos(); // Call the 'getRepos' function when the component mounts
  }, []);

  const reposWithOneStar = repos.filter((repo) => repo.stargazers_count === 1);
  console.log(reposWithOneStar);

  return (
    <div>
      <div className="flip">
        {reposWithOneStar.length > 0 && (
          <div
            style={{
              paddingBottom: "30px",
              position: "relative",
            }}
          >
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={true}
              className=""
              containerClass="container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 1,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 1,
                },
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {reposWithOneStar.map((repo) => {
                const logoUrl = `https://raw.githubusercontent.com/Leroyg-11/${repo.name}/main/Logo.png`;

                return (
                  <div className="not-active" key={repo.id}>
                    <CardFlipped
                      name={repo.name}
                      description={repo.description}
                      html_url={repo.html_url}
                      topics={repo.topics}
                      logoUrl={logoUrl}
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarouselFlipp;
