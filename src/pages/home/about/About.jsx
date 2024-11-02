import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero py-20">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2 relative">
        <img
          src={person} className="rounded-md w-3/4 h-full"
        />
        <img
          src={parts} className="rounded-md w-1/2 border-8 border-white absolute right-5 top-1/2"
        />
        </div>
        <div className="lg:w-1/2 space-y-5">
        <h3 className="text-2xl font-bold text-error">About Us</h3>
          <h1 className="text-5xl font-bold lg:pr-32 leading-tight">We are qualified & of experience in this field</h1>
          <p className="text-base text-gray-600">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <p className="text-base text-gray-600">
          Tthe majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <button className="btn btn-error text-white font-bold text-lg">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;
