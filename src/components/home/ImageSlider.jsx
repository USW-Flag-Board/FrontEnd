import Slider from "react-slick";
import home from "../../assets/images/home.png";
import recruit from "../../assets/images/recruit(가로).png";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  return (
    <Slider {...settings}>
      {/* <ImageBox>
        <Image src={home} alt="" />
      </ImageBox> */}
      <ImageBox>
        <Image src={recruit} alt="" />
      </ImageBox>
    </Slider>
  );
};

export default ImageSlider;

const ImageBox = styled.div`
  outline: none;
  height: 250px;
  @media (max-width: 480px) {
    height: 14rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;
