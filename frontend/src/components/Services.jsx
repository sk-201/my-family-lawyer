import React from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const cardData = [
    {
      id: 1,
      path: "/divorce",
      title: "Divorce",
      content:
        "Divorce marks a significant life change. My Family Lawyer offers expert and compassionate guidance through this challenging process, ensuring your rights are protected.",
      icon: "fas fa-2x fa-heart-broken",
    },
    {
      id: 2,
      path: "/domestic-violence",
      title: "Domestic Violence",
      content:
        "Domestic violence is a serious crime. My Family Lawyer is dedicated to safeguarding the rights of victims and the accused, providing strong legal support.",
      icon: "fas fa-2x fa-user-shield",
    },
    {
      id: 3,
      path: "/maintenance",
      title: "Maintenance",
      content:
        "Maintenance provides financial support to those in need. My Family Lawyer helps you navigate your rights and obligations regarding this crucial provision.",
      icon: "fas fa-2x fa-hand-holding-usd",
    },
    {
      id: 4,
      path: "/marriage",
      title: "Marriage",
      content:
        "Marriage is a major milestone, symbolizing love and partnership. My Family Lawyer ensures your legal interests are protected, making your union secure.",
      icon: "fas fa-2x fa-hands-helping",
    },
    {
      id: 5,
      path: "/child-custody",
      title: "Child Custody",
      content:
        "Child custody matters are complex and emotional. My Family Lawyer prioritizes your child’s well-being while navigating legal challenges for the best outcome.",
      icon: "fas fa-2x fa-child",
    },
    {
      id: 6,
      path: "/live-in-relationship",
      title: "Live-in Relationship",
      content:
        "Live-in relationships, though not formal marriages, carry legal implications. My Family Lawyer guides you through these, ensuring your rights are respected.",
      icon: "fas fa-2x fa-home",
    },
  ];

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mt-5">
      {cardData.map((card) => {
        return (
          <div
            className="col mt-5"
            key={card.id}
            style={{ cursor: "pointer" }}
            onClick={() => navigate(card.path)}
          >
            <div className="card h-100 d-flex flex-column">
              <div
                className="icon-box text-primary mt-2 d-flex justify-content-center align-items-center"
                style={{
                  backgroundColor: "#919191",
                  height: "60px",
                  width: "60px",
                  borderRadius: "50%",
                  margin: "0 auto",
                }}
              >
                <i className={card.icon} style={{ color: "#fff" }}></i>
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center">{card.title}</h5>
                <p className="card-text flex-grow-1 text-center">
                  {card.content}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
