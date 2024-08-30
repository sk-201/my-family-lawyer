import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const OtherServices = () => {
  const cardData = [
    {
      id: 1,
      title: "Dowry",
      content:
        "Dowry harassment is a serious crime with devastating consequences. The demand for dowry often leads to harassment, domestic violence, and even tragic outcomes. We condemn dowry in all its forms and stand with victims.Some people are misusing Dowery laws. The misuse of dowry laws has become a serious issue, undermining the intent of protecting women from exploitation. ",
    },
    {
      id: 2,
      title: "Visitation Rights",
      content:
        "Visitation rights allow parents to spend quality time with their children and maintain a meaningful relationship with their children. These rights are crucial for maintaining a healthy parent-child relationship. Visitation must be viewed as something done for the benefit of the child. My family lawyer establishes or modify visitation arrangements that suit your family's unique circumstances",
    },
    {
      id: 3,
      title: "Adoption",
      content:
        "Adoption is a beautiful journey of building a family through love and commitment. My family lawyer can guide you through the legal complexities of adoption, ensuring a smooth and seamless process. Whether you're adopting a child or seeking legal counsel as an adoptive parent, we are here to support you every step of the way.",
    },
    {
      id: 4,
      title: "Alimony",
      content:
        "Alimony, or spousal support, is a financial provision granted to a spouse following a divorce. Determining the appropriate amount and duration of alimony requires careful consideration of various factors. It refers to the financial support provided by one spouse to the other after the couple decides to end their marriage or separation. My family lawyer can help you understand your rights and options, whether you are seeking alimony or defending against a claim.",
    },
    {
      id: 5,
      title: "Family Settlement",
      content:
        "A family settlement is a voluntary agreement between family members to resolve disputes amicably. It offers a peaceful alternative to costly and time-consuming litigation. My family lawyer can guide you through the process, ensuring a fair and equitable outcome for all parties involved.",
    },
    {
      id: 6,
      title: "False Sexual Harassment Accusations",
      content:
        "False accusations of sexual harassment can have devastating consequences for the accused, including loss of reputation, employment, and emotional distress. These false allegations undermine the credibility of genuine victims and erode public trust in the legal system. My family lawyer provide strong legal defines to protect the innocent from wrongful accusations",
    },
  ];
  return (
    <div
      style={{
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <div className="row row-cols-1">
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {cardData.map((card) => {
            return (
              <SwiperSlide key={card.id}>
                <div className="col mt-5 p-5">
                  <div
                    className="card h-100 d-flex flex-column"
                    style={{
                      background: "#919191",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="card-body d-flex flex-column flex-grow-1">
                      <h5
                        className="card-title text-center"
                        style={{
                          color: "#fff",
                          fontWeight: "700",
                        }}
                      >
                        {card.title}
                        <hr style={{ backgroundColor: "#fff" }} />
                      </h5>
                      <p className="card-text text-center text-white">
                        {card.content}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default OtherServices;
