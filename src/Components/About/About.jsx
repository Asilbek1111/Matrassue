import React from "react";
import Rec from '../../img/rec.png'
import './About.scss';
import Fade from "react-reveal/Fade";


const About = () => {
  return (
    <div className="about">
      <Fade left cascade>
        <div className="about__container">
          <div className="left">
            <h1>Matrassue kompaniyasi haqida</h1>
            <p>
              Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor
              a est. Habitant adipiscing ut sed pulvinar tellus, ut urna,
              fermentum:
            </p>
            <div className="pink">
              <ul>
                <li>Penatibus viverra gravida rhoncus in.</li>
                <li>Dolor integer in interdum viverra risus dolor enim.</li>
                <li>
                  Turpis senectus eu, eget aenean nulla pellentesque sed ut
                  tempor.
                </li>
              </ul>
            </div>

            <img src={Rec} alt="" />
          </div>
          <div className="right">
            <div className="frame">
              <iframe
                width="650"
                height="390"
                src="https://www.youtube.com/embed/T8xs9FHEyeY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <p>
              Libero erat praesent ullamcorper eget tortor sed et. Nec id
              lobortis gravida vitae. Scelerisque id fusce vitae ut. Integer sed
              vulputate sed nec. Arcu id mattis erat et id.
            </p>
            <div className="pink">
              <ul>
                <li>Penatibus viverra gravida rhoncus in.</li>
                <li>Dolor integer in interdum viverra risus dolor enim.</li>
                <li>
                  Turpis senectus eu, eget aenean nulla pellentesque sed ut
                  tempor.
                </li>
                <li>
                  Facilisi mauris condimentum sagittis odio rhoncus semper.
                </li>
              </ul>
            </div>
            <p>
              Ac tortor volutpat pellentesque mauris nisi, praesent. Et tempus
              accumsan est elementum feugiat arcu mauris tincidunt. Eget
              faucibus pharetra et luctus eget ut fames. A cursus elementum
              egestas eu scelerisque id.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default About;
