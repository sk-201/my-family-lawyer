import React from "react";

const Team = () => {
  return (
    <div className="col-lg-9 pt-5 pt-lg-0">
      <div
        className="rounded"
        style={{ height: "200px", backgroundColor: "#919191" }}
      ></div>
      <div
        className="owl-carousel team-carousel position-relative"
        style={{ marginTop: "-100px", padding: "0 30px" }}
      >
        <div className="team d-flex flex-column text-center rounded overflow-hidden">
          <div className="position-relative">
            <div className="team-img">
              <img
                className=" w-75  object-fit-cover"
                src="img/mohd-yusuf.jpeg"
                alt="mohd-yusuf"
              />
            </div>
          </div>
          <div
            className="d-flex flex-column  text-center py-4"
            style={{ backgroundColor: "#919191" }}
          >
            <h5 style={{ color: "#ffffff" }}>Mohd Yusuf</h5>
            <p className="m-0 text-white">Advocate</p>
          </div>
        </div>
        <div className="team d-flex flex-column text-center rounded overflow-hidden">
          <div className="position-relative">
            <div className="team-img">
              <img
                className="w-75"
                src="img/mohd-shakeel.jpeg"
                alt="mohd-shakeel"
              />
            </div>
          </div>
          <div
            className="d-flex flex-column  text-center py-4"
            style={{ backgroundColor: "#919191" }}
          >
            <h5 style={{ color: "#ffffff" }}>Mohd Shakeel</h5>
            <p className="m-0 text-white">Legal Consultant</p>
          </div>
        </div>
        <div className="team d-flex flex-column text-center rounded overflow-hidden">
          <div className="position-relative">
            <div className="team-img">
              <img
                className="w-75"
                src="img/nitin-bhaskar.jpeg"
                alt="nitin-bhaskar"
              />
            </div>
          </div>
          <div
            className="d-flex flex-column  text-center py-4"
            style={{ backgroundColor: "#919191" }}
          >
            <h5 style={{ color: "#ffffff" }}>Nitin Bhaskar</h5>
            <p className="m-0 text-white">Advocate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
