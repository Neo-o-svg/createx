// import React from "react";
// import bgImage from "../../img/swa-bg.jpg";
// import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
// import "@fancyapps/ui/dist/fancybox/fancybox.css";

// export default function We() {
//   return (
//     <section className="we">
//       <div className="default-top we-top">
//         <div className="container">
//           <span className="h2">We are Createx Construction Bureau</span>
//           <p>
//             We are rightfully considered to be the best construction company in
//             the USA.
//           </p>
//         </div>
//       </div>

//       <div className="container">
//         <div className="we__video">
//           <div
//             className="we__bg"
//             style={{ backgroundImage: `url(${bgImage})` }}
//           ></div>
//           <span className="we__play"></span>
//           {/* <span className="we__sound"></span> */}
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useEffect } from "react";
import bgImage from "../../img/swa-bg.jpg";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function We() {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});
    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <section className="we">
      <div className="default-top we-top">
        <div className="container">
          <span className="h2">We are Createx Construction Bureau</span>
          <p>
            We are rightfully considered to be the best construction company in
            the USA.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="we__video">
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            data-fancybox="video"
          >
            <div
              className="we__bg"
              style={{ backgroundImage: `url(${bgImage})` }}
            ></div>
            <span className="we__play"></span>
          </a>
          <span className="we__sound"></span>
        </div>
      </div>
    </section>
  );
}
