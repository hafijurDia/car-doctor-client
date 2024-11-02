
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';

const Banner = () => {
    return (
        <section>
            <div className="max-w-6xl mx-auto">
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={img1}
     />
    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={img2}
      className="w-full" />
    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={img3}
      className="w-full" />
    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={img4}
      className="w-full" />
    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
            </div>
        </section>
    );
};


Banner.propTypes = {

};


export default Banner;
