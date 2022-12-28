import React from "react";
import sampleimg from "../../assets/suggestion.png";
import sampleimg1 from "../../assets/Images/android.png";
import road_im from "../../assets/Images/road-map.png";
import yand1 from "../../assets/yt/andro_kt1.jpg";
import yand2 from "../../assets/yt/andro_cwh.jpg";
import yand3 from "../../assets/yt/kotlin_steve.jpg";
import yand4 from "../../assets/yt/andro_course.jpg";
import cand1 from "../../assets/courses/andro_udemy.png";

const Andro = () => {
  return (
    <div>
      <section id="Main">
        <div className="maindiv_content" id="yash_div">
          <div className="offi_websites">
            <h4>Official websites</h4>
            <div className="marquee_div">
              <marquee
                id="rightContainer_ContentTable2_panel3"
                align="justify"
                direction="up"
                onmouseout="this.start()"
                height="200px"
                onmouseover="this.stop()"
                scrollamount="3"
                scrolldelay="60"
              >
                <div className="site1">
                  <p align="justify">
                    <a href="https://developer.android.com/docs" target="blank">
                      Android Developer Documentation
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://developer.android.com/" target="blank">
                      Android Developer official
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://developer.android.com/courses/android-basics-kotlin/course" target="blank">
                      Android Kotlin basics
                    </a>
                  </p>
                </div>
              </marquee>
            </div>
          </div>
          <div className="yt_videos">
            <h4>Youtube videos</h4>
            <div className="img_marquee">
              <marquee
                id="rightContainer_ContentTable2_panel3"
                align="justify"
                direction="up"
                onmouseout="this.start()"
                height="200px"
                onmouseover="this.stop()"
                scrollamount="4"
                scrolldelay="5"
              >
                <div className="yt1">
                  <p align="justify">
                    <a href="https://www.youtube.com/@PhilippLackner/playlists" target="blank">
                      <img className="im1" src={yand1} />
                    </a>
                  </p>
                </div>

                <div className="yt1">
                  <p align="justify">
                    <a href="https://youtube.com/watch?v=mXjZQX3UzOs" target="blank">
                      <img className="im1" src={yand2} />
                    </a>
                  </p>
                </div>

                <div className="yt1">
                  <p align="justify">
                    <a href="https://www.youtube.com/@StevdzaSan" target="blank">
                      <img className="im1" src={yand3} />
                    </a>
                  </p>
                </div>

                <div className="yt1">
                  <p align="justify">
                    <a href=" https://www.youtube.com/playlist?list=PLUhfM8afLE_Ok-0Lx2v9hfrmbxi3GgsX1" target="blank">
                      <img className="im1" src={yand4} />
                    </a>
                  </p>
                </div>
              </marquee>
            </div>
          </div>
          <div className="Projects">
            <h4>Projects</h4>
            <div className="project_con">
            <div className="level3">
              <h4>Advanced</h4>
            </div>
            <div className="level2">
              <h4>Intermediate</h4>
            </div>
            <div className="level1">
              <h4>Basic</h4>
            </div>
            </div>
          </div>
          <div className="Roadmap">
            <h4>Roadmap</h4>
            <div className="roadmap_con">
              <div className="road_img">
                <img src={road_im}></img>
              </div>
              <div className="button">
                <a href="">Get the road map</a>
              </div>
            </div>
          </div>

          <div className="Courses">
            <h4>Courses</h4>
            <div className="course_marquee">
              <marquee
                id="rightContainer_ContentTable2_panel3"
                align="justify"
                direction="down"
                onmouseout="this.start()"
                height="200px"
                onmouseover="this.stop()"
                scrollamount="4"
                scrolldelay="10"
              >
                <div className="cr1">
                  <a href="https://www.udemy.com/course/android-kotlin-developer/" target="blank">
                    <img className="im1" src={cand1} />
                  </a>
                </div>
              </marquee>
            </div>
          </div>

          <div className="Suggestion_form">
            <h4>Suggestions form</h4>

            <div className="suggest_con">
              <marquee
                id="rightContainer_ContentTable2_panel3"
                align="justify"
                direction="up"
                onmouseout="this.start()"
                height="200px"
                onmouseover="this.stop()"
                scrollamount="3"
                scrolldelay="60"
              ></marquee>
              <div className="texts">
                {/* <p>Suggestion</p> */}
                <a href="#Suggestion"> Suggestion</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Andro;
