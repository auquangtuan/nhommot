import React, { Fragment } from 'react'
import Slider from "react-slick";
import SampleNextArrow from "~/components/SampleNextArrow/SampleNextArrow";
import SamplePrevArrow from "~/components/SamplePrevArrow/SamplePrevArrow";
import './Style.scss'
export default function Style() {
    const settings = {
        className: "center",
        centerMode: false,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 5,
        slidesToScroll: 3,
        speed: 500,
        rows: 2,
        slidesPerRow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1030,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
        ]
    };
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-12'>
                    <Fragment>
                        <div className="container">
                            <h2 style={{ fontWeight: 'bold', fontSize: 24, lineHeight: 1.6 }}>Theo Phong Cách </h2>
                            <p className="mini">
                                Một chút bụi bặm và đường phố được đưa và trong thiết kế để khiến bạn mạnh mẽ hơn.
                                Những xu hướng thời trang mới nhất đã được nhà thiết kế của chúng tôi mang về đây.
                            </p>
                        </div>
                        <div className='stylediv d-flex gap-5 ml-5'>
                            <div className='styleHover d-flex flex-column justify-content-center align-items-center'><img style={{ width: 50, height: 50 }} src='https://bizweb.dktcdn.net/100/399/392/themes/781998/assets/image_1_garden.png?1657439600210'></img><span>Đi Chơi</span></div>
                            <div className='styleHover d-flex flex-column justify-content-center align-items-center'><img style={{ width: 50, height: 50 }} src='https://bizweb.dktcdn.net/100/399/392/themes/781998/assets/image_1_garden.png?1657439600210'></img><span>Đi Làm</span></div>
                            <div className='styleHover d-flex flex-column justify-content-center align-items-center'><img style={{ width: 50, height: 50 }} src='https://bizweb.dktcdn.net/100/399/392/themes/781998/assets/image_1_garden.png?1657439600210'></img><span>Cá Tính</span></div>
                        </div>

                        <div className="container-fluid carousel">
                            <Slider {...settings} style={{ margin: 30 }}>
                                <div className="">
                                    <img style={{
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                    }} src='https://bizweb.dktcdn.net/thumb/large/100/399/392/products/ao-polo-nam-tay-phoi-mau-trang-trang-05052203-d28be8c4-1503-4da0-9d66-b674db9409bb.jpg?v=1653983290000' width={180} height={180}></img>
                                    <div className="proinfo">
                                        <h3><a href='#'>H05-T1 Áo polo tay phối màu trắng-Trắng</a></h3>
                                        <div className="pricebox">199.000 <span className="gach">299000</span></div>
                                    </div>
                                </div>
                                <div>
                                    <img style={{
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                    }} src='https://bizweb.dktcdn.net/thumb/large/100/399/392/products/ao-polo-nam-tay-phoi-mau-trang-trang-05052203-d28be8c4-1503-4da0-9d66-b674db9409bb.jpg?v=1653983290000' width={180} height={180}></img>
                                    <div className="proinfo">
                                        <h3><a href='#'>H05-T1 Áo polo tay phối màu trắng-Trắng</a></h3>

                                        <div className="pricebox">199.000 <span className="gach">299000</span></div>
                                    </div>
                                </div>
                                <div>
                                    <img style={{
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                    }} src='https://bizweb.dktcdn.net/thumb/large/100/399/392/products/ao-polo-nam-tay-phoi-mau-trang-trang-05052203-d28be8c4-1503-4da0-9d66-b674db9409bb.jpg?v=1653983290000' width={180} height={180}></img>
                                    <div className="proinfo">
                                        <h3><a href='#'>H05-T1 Áo polo tay phối màu trắng-Trắng</a></h3>

                                        <div className="pricebox">199.000 <span className="gach">299000</span></div>
                                    </div>
                                </div>
                                <div>
                                    <img style={{
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                    }} src='https://bizweb.dktcdn.net/thumb/large/100/399/392/products/ao-polo-nam-tay-phoi-mau-trang-trang-05052203-d28be8c4-1503-4da0-9d66-b674db9409bb.jpg?v=1653983290000' width={180} height={180}></img>
                                    <div className="proinfo">
                                        <h3><a href='#'>H05-T1 Áo polo tay phối màu trắng-Trắng</a></h3>

                                        <div className="pricebox">199.000 <span className="gach">299000</span></div>
                                    </div>
                                </div>
                                <div>
                                    <img style={{
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                    }} src='https://bizweb.dktcdn.net/thumb/large/100/399/392/products/ao-polo-nam-tay-phoi-mau-trang-trang-05052203-d28be8c4-1503-4da0-9d66-b674db9409bb.jpg?v=1653983290000' width={180} height={180}></img>
                                    <div className="proinfo">
                                        <h3><a href='#'>H05-T1 Áo polo tay phối màu trắng-Trắng</a></h3>

                                        <div className="pricebox">199.000 <span className="gach">299000</span></div>
                                    </div>
                                </div>
                                <div>
                                    <img style={{
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                    }} src='https://bizweb.dktcdn.net/thumb/large/100/399/392/products/ao-polo-nam-tay-phoi-mau-trang-trang-05052203-d28be8c4-1503-4da0-9d66-b674db9409bb.jpg?v=1653983290000' width={180} height={180}></img>
                                    <div className="proinfo">
                                        <h3><a href='#'>H05-T1 Áo polo tay phối màu trắng-Trắng</a></h3>

                                        <div className="pricebox">199.000 <span className="gach">299000</span></div>
                                    </div>
                                </div>
                                <div>
                                    <img style={{
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                    }} src='https://bizweb.dktcdn.net/thumb/large/100/399/392/products/ao-polo-nam-tay-phoi-mau-trang-trang-05052203-d28be8c4-1503-4da0-9d66-b674db9409bb.jpg?v=1653983290000' width={180} height={180}></img>
                                    <div className="proinfo">
                                        <h3><a href='#'>H05-T1 Áo polo tay phối màu trắng-Trắng</a></h3>

                                        <div className="pricebox">199.000 <span className="gach">299000</span></div>
                                    </div>
                                </div>
                                <div>
                                    <img style={{
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                    }} src='https://bizweb.dktcdn.net/thumb/large/100/399/392/products/ao-polo-nam-tay-phoi-mau-trang-trang-05052203-d28be8c4-1503-4da0-9d66-b674db9409bb.jpg?v=1653983290000' width={180} height={180}></img>
                                    <div className="proinfo">
                                        <h3><a href='#'>H05-T1 Áo polo tay phối màu trắng-Trắng</a></h3>

                                        <div className="pricebox">199.000 <span className="gach">299000</span></div>
                                    </div>
                                </div>
                                <div>
                                    <img style={{
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                    }} src='https://bizweb.dktcdn.net/thumb/large/100/399/392/products/ao-polo-nam-tay-phoi-mau-trang-trang-05052203-d28be8c4-1503-4da0-9d66-b674db9409bb.jpg?v=1653983290000' width={180} height={180}></img>
                                    <div className="proinfo">
                                        <h3><a href='#'>H05-T1 Áo polo tay phối màu trắng-Trắng</a></h3>

                                        <div className="pricebox">199.000 <span className="gach">299000</span></div>
                                    </div>
                                </div>
                                <div>
                                    <img style={{
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                    }} src='https://bizweb.dktcdn.net/thumb/large/100/399/392/products/ao-polo-nam-tay-phoi-mau-trang-trang-05052203-d28be8c4-1503-4da0-9d66-b674db9409bb.jpg?v=1653983290000' width={180} height={180}></img>
                                    <div className="proinfo">
                                        <h3><a href='#'>H05-T1 Áo polo tay phối màu trắng-Trắng</a></h3>

                                        <div className="pricebox">199.000 <span className="gach">299000</span></div>
                                    </div>
                                </div>
                                <div>
                                    <img style={{
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                    }} src='https://bizweb.dktcdn.net/thumb/large/100/399/392/products/ao-polo-nam-tay-phoi-mau-trang-trang-05052203-d28be8c4-1503-4da0-9d66-b674db9409bb.jpg?v=1653983290000' width={180} height={180}></img>
                                    <div className="proinfo">
                                        <h3><a href='#'>H05-T1 Áo polo tay phối màu trắng-Trắng</a></h3>

                                        <div className="pricebox">199.000 <span className="gach">299000</span></div>
                                    </div>
                                </div>
                                <div>
                                    <img style={{
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                    }} src='https://bizweb.dktcdn.net/thumb/large/100/399/392/products/ao-polo-nam-tay-phoi-mau-trang-trang-05052203-d28be8c4-1503-4da0-9d66-b674db9409bb.jpg?v=1653983290000' width={180} height={180}></img>
                                    <div className="proinfo">
                                        <h3><a href='#'>H05-T1 Áo polo tay phối màu trắng-Trắng</a></h3>

                                        <div className="pricebox">199.000 <span className="gach">299000</span></div>
                                    </div>
                                </div>
                                <div>
                                    <img style={{
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                    }} src='https://bizweb.dktcdn.net/thumb/large/100/399/392/products/ao-polo-nam-tay-phoi-mau-trang-trang-05052203-d28be8c4-1503-4da0-9d66-b674db9409bb.jpg?v=1653983290000' width={180} height={180}></img>
                                    <div className="proinfo">
                                        <h3><a href='#'>H05-T1 Áo polo tay phối màu trắng-Trắng</a></h3>

                                        <div className="pricebox">199.000 <span className="gach">299000</span></div>
                                    </div>
                                </div>
                                <div>
                                    <img style={{
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                    }} src='https://bizweb.dktcdn.net/thumb/large/100/399/392/products/ao-polo-nam-tay-phoi-mau-trang-trang-05052203-d28be8c4-1503-4da0-9d66-b674db9409bb.jpg?v=1653983290000' width={180} height={180}></img>
                                    <div className="proinfo">
                                        <h3><a href='#'>H05-T1 Áo polo tay phối màu trắng-Trắng</a></h3>

                                        <div className="pricebox">199.000 <span className="gach">299000</span></div>
                                    </div>
                                </div>
                                <div>
                                    <img style={{
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                    }} src='https://bizweb.dktcdn.net/thumb/large/100/399/392/products/ao-polo-nam-tay-phoi-mau-trang-trang-05052203-d28be8c4-1503-4da0-9d66-b674db9409bb.jpg?v=1653983290000' width={180} height={180}></img>
                                    <div className="proinfo">
                                        <h3><a href='#'>H05-T1 Áo polo tay phối màu trắng-Trắng</a></h3>

                                        <div className="pricebox">199.000 <span className="gach">299000</span></div>
                                    </div>
                                </div>
                                <div>
                                    <img style={{
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                    }} src='https://bizweb.dktcdn.net/thumb/large/100/399/392/products/ao-polo-nam-tay-phoi-mau-trang-trang-05052203-d28be8c4-1503-4da0-9d66-b674db9409bb.jpg?v=1653983290000' width={180} height={180}></img>
                                    <div className="proinfo">
                                        <h3><a href='#'>H05-T1 Áo polo tay phối màu trắng-Trắng</a></h3>

                                        <div className="pricebox">199.000 <span className="gach">299000</span></div>
                                    </div>
                                </div>
                                <div>
                                    <img style={{
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                    }} src='https://bizweb.dktcdn.net/thumb/large/100/399/392/products/ao-polo-nam-tay-phoi-mau-trang-trang-05052203-d28be8c4-1503-4da0-9d66-b674db9409bb.jpg?v=1653983290000' width={180} height={180}></img>
                                    <div className="proinfo">
                                        <h3><a href='#'>H05-T1 Áo polo tay phối màu trắng-Trắng</a></h3>

                                        <div className="pricebox">199.000 <span className="gach">299000</span></div>
                                    </div>
                                </div>
                                <div>
                                    <img style={{
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                    }} src='https://bizweb.dktcdn.net/thumb/large/100/399/392/products/ao-polo-nam-tay-phoi-mau-trang-trang-05052203-d28be8c4-1503-4da0-9d66-b674db9409bb.jpg?v=1653983290000' width={180} height={180}></img>
                                    <div className="proinfo">
                                        <h3><a href='#'>H05-T1 Áo polo tay phối màu trắng-Trắng</a></h3>

                                        <div className="pricebox">199.000 <span className="gach">299000</span></div>
                                    </div>
                                </div>

                            </Slider>
                        </div>
                    </Fragment>
                </div>
            </div>
        </div>
    )
}
