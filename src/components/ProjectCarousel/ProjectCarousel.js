import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { ProjectCard } from "./CarouselProjectCard/CarouselProjectCard";
import { ProjectDetail } from "./ProjectDetail/ProjectDetail";
import { CarouselActions } from "./CarouselActions/CarouselActions";

export const ProjectCarousel = (props) => {
  const { carousel } = useContext(AppContext);
  const [projectActions, setProjectActions] = useState({
    leftIdx: 1,
    curIdx: 2,
    rightIdx: 3,
    leftProject: carousel[1],
    curProject: carousel[2],
    rightProject: carousel[3],
  });
  const [animTimer, setAnimTimer] = useState({
    right: false,
    left: false,
    disabled: false,
  });
  const animRight = () => {
    setAnimTimer((prevState) => ({
      ...prevState,
      right: true,
      disabled: true,
    }));
    setTimeout(
      () => setAnimTimer({ right: false, left: false, disabled: false }),
      1000
    );
  };
  const animLeft = () => {
    setAnimTimer((prevState) => ({
      ...prevState,
      left: true,
      disabled: true,
    }));
    setTimeout(
      () => setAnimTimer({ right: false, left: false, disabled: false }),
      1000
    );
  };
  const arrowRight = () => {
    const { curIdx, leftIdx, rightIdx } = projectActions;
    const max = carousel.length;
    let cur = curIdx;
    let left = leftIdx;
    let right = rightIdx;
    cur--;
    left--;
    right--;
    if (left < 0) {
      left = max - 3;
      cur = max - 2;
      right = max - 1;
    }
    setTimeout(
      () =>
        setProjectActions({
          leftIdx: left,
          curIdx: cur,
          rightIdx: right,
          curProject: carousel[cur],
          leftProject: carousel[left],
          rightProject: carousel[right],
        }),
      1000
    );
    animRight();
  };
  const arrowLeft = () => {
    const { curIdx, leftIdx, rightIdx } = projectActions;
    const max = carousel.length;
    let cur = curIdx;
    let left = leftIdx;
    let right = rightIdx;
    cur++;
    left++;
    right++;
    if (right >= max) {
      left = 0;
      cur = 1;
      right = 2;
    }
    setTimeout(
      () =>
        setProjectActions({
          leftIdx: left,
          curIdx: cur,
          rightIdx: right,
          curProject: carousel[cur],
          leftProject: carousel[left],
          rightProject: carousel[right],
        }),
      1000
    );
    animLeft();
  };
  return (
    <div className="ProjectCarousel-container">
      <CarouselActions
        arrowLeft={() => arrowLeft()}
        arrowRight={() => arrowRight()}
        disableButtons={animTimer.disabled}
        title={projectActions.curProject.title}
      />
      <div className="ProjectCarousel-row">
        <div
          className={`ProjectCarousel-project-left ${
            animTimer.right ? "slide-right-anim" : ""
          } ${animTimer.left ? "slide-left-anim" : ""}`}
        >
          <ProjectCard
            img={projectActions.leftProject.pic}
            alt={projectActions.leftProject.alt}
          />
        </div>
        <div
          className={`ProjectCarousel-project-middle ${
            animTimer.right ? "slide-right-middle" : ""
          } ${animTimer.left ? "slide-left-middle" : ""}`}
        >
          <ProjectCard
            img={projectActions.curProject.pic}
            alt={projectActions.curProject.alt}
          />
        </div>
        <div
          className={`ProjectCarousel-project-right ${
            animTimer.right ? "slide-right-anim" : ""
          } ${animTimer.left ? "slide-left-anim" : ""}`}
        >
          <ProjectCard
            img={projectActions.rightProject.pic}
            alt={projectActions.rightProject.alt}
          />
        </div>
      </div>
      <ProjectDetail
        description={projectActions.curProject.description}
        tech={projectActions.curProject.tech}
      />
    </div>
  );
};
