import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/yourtrip2.png";
import project2 from "../assets/images/Shopy.png";
import project3 from "../assets/images/fintech.png";
import project4 from "../assets/images/sgs.png";
import project5 from "../assets/images/addis.png";
import project_person from "../assets/images/point.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Your Trip Travel Website",
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://yourtrip-seven.vercel.app/",
    },
    {
      img: project2,
      name: "Shopy Online Shopping Web App",
      github_link: "https://github.com/Sridhar-C-25/jobsearchapp",
      live_link: "https://shopy-front.onrender.com/",
    },
    {
      img: project3,
      name: "Fintech Website",
      github_link: "https://github.com/Sridhar-C-25/highking",
      live_link: "https://fintechweb2.vercel.app",
    },
    {
      img: project4,
      name: "SGS Furniture Website",
      github_link:
        "https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown",
      live_link: "https://sgsfurniture.netlify.app/",
    },
    {
      img: project5,
      name: "Addis Cafe Website",
      github_link:
        "https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown",
      live_link: "https://addiscafe-9e96e.web.app/",
    }
    
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden rounded-[50px]">
          <img src={project_person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
