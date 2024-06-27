import React from "react";
import Swiper from "react-id-swiper";
import { Col, Container, Row } from "reactstrap";
import ReactPlayer from "react-player";
import textbottom from "../../assets/img/textbottom.png";

import axiosConfig from "../../axiosConfig";

class HomeVideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      youtubeList: [],
    };
  }
  componentDidMount() {
    axiosConfig.get(`/admin/video_list`).then(res => {
      this.setState({ youtubeList: res.data.data });
    });
  }

  render() {
    const { youtubeList } = this.state;
    const settings = {
      loop: true,
      slidesPerView: 4,
      grabCursor: true,
      spaceBetween: 10,
      breakpoints: {
        1024: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
        640: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      },
      // watchSlidesVisibility: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      renderPrevButton: () => (
        <button className="swiper-button-prev ht-swiper-button-nav gt-1">
          <i className="pe-7s-angle-left" />
        </button>
      ),
      renderNextButton: () => (
        <button className="swiper-button-next ht-swiper-button-nav gt-2">
          <i className="pe-7s-angle-right" />
        </button>
      ),
    };

    return (
      <div className="mt-20">
        <Container>
          <div className="heading">
            <h2>Watch Astrologers Video</h2>
            <img src={textbottom} alt="" />
          </div>

          <Col>
            <Swiper {...settings}>
              {this.state.youtubeList
                ? youtubeList.map(data => {
                    return (
                      <div key={data?._id} className="v-bx">
                        <ReactPlayer
                          style={{ position: "relative !important" }}
                          url={`https://www.youtube.com/embed/${data.youtube_link}`}
                          playing={false}
                          className="vdl-l"
                        />
                      </div>
                    );
                  })
                : null}
            </Swiper>
          </Col>
        </Container>
      </div>
    );
  }
}

export default HomeVideoList;
