import Slider from 'react-slick';
import { FaArrowRight } from 'react-icons/fa';
import { programData } from '@/assets/ptm-data/program.data';

export default function ProgramSlider() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 720,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            }
          ]
    };

    return (
        <div className='block w-full slider-cotainer pb-3 pt-10'>
            <Slider
            className='lg:w-full w-full'
            {...settings}>
                {
                    programData.carousel.map((program) => {
                        return (
                            <div key={program.slug} className='relative px-3'>
                                <img src={program.img_url} alt={program.slug} className=' w-full aspect-square object-cover object-center rounded-3xl'></img>
                                <div className=' absolute bottom-0 py-10 px-14'>
                                    <div className='flex flex-col gap-1'>
                                        <h3 className='ptm-h3 text-white'>{program.name}</h3>
                                        <p className=' ptm-card-subtitle text-white pb-5'>{program.desc}</p>
                                        <div className=' flex'>
                                            <div className='flex flex-row gap-3 cursor-pointer bg-white/50 rounded-3xl px-3 py-1 border-2 border-white items-center text-white hover:scale-105'>
                                                <p className='ptm-card-btn'>Read More</p>
                                                <FaArrowRight />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}