import React, { Fragment } from 'react'
import Slider from "react-slick";
import SampleNextArrow from "~/components/SampleNextArrow/SampleNextArrow";
import SamplePrevArrow from "~/components/SamplePrevArrow/SamplePrevArrow";
export default function Elegant() {
    const settings = {
        className: "center",
        centerMode: false,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 500,
        rows: 1,
        slidesPerRow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 300,
              settings: {
                slidesToShow: 1,
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
            <div className='row align-items-center justify-content-center'>
                <div className='col-lg-8 col-md-12'>
                    <Fragment>
                        <div className="container">
                            <h2 style={{ fontWeight: 'bold', fontSize: 24, lineHeight: 1.6 }}>Thanh Lịch </h2>
                            <p className="mini">
                                Đơn giản đến kỳ công, những sản phẩm tôn lên sự tinh tế và quí phái.
                                Dòng sản phẩm chú trọng đến chất liệu và đường nét.
                            </p>
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
                <div className='col-lg-4 col-md-12'>
                    <img width={305} height={305}  src='https://bizweb.dktcdn.net/100/399/392/themes/781998/assets/bannner_leftnamwatch.jpg?1657439600210'></img>
                </div>
            </div>
        </div>
    )
}
