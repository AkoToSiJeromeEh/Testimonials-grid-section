import { QoutesImg } from "../assets";
import PropTypes from "prop-types";
export const Card = ({
  TestimonialUsrName,
  TestimonialUsrProf,
  TestimonialUsrCtgy,
  TestimonialTitle,
  TestimonialCont,
  TestimonialStyle,
  index,
}) => {
  return (
    <div
      className={`${TestimonialStyle} py-5 px-10 rounded-md  flex flex-col gap-4   text-[13.4px] relative isolate  h-full w-fit shadow-sm border-2 ${index === 0 || index === 1 ? 'border-White hover:bg-black' : 'border-Moderate-violet hover:bg-Light-grayish-blue'}  hover:shadow-Very-dark-grayish-blue transition-all  cursor-pointer    `}
    >
      <div>
        
      </div>
      <div className="flex flex-row gap-3 items-center">
        <img
          className={`w-8 h-8 rounded-full  border-2 ${index === 0 || index === 1 ? ' border-White' : ' border-Moderate-violet'}`}
          src={TestimonialUsrProf}
          alt="my image"
        />

        <div>
          {index === 0 && (
            <div className={` absolute -z-10 right-24 top-0`}>
            <img src={QoutesImg}  />
          </div>
          )}
          <p className="">{TestimonialUsrName}</p>
          <span className="  opacity-60">{TestimonialUsrCtgy}</span>
        </div>
      </div>

      <p className="font-semibold text-[1.2rem]    tracking-wide leading-[1.58rem]">
        {TestimonialTitle}
      </p>
      <p className="  opacity-70 ">{TestimonialCont}</p>
    </div>
  );
};
Card.propTypes = {
  TestimonialUsrName: PropTypes.string.isRequired,
  TestimonialUsrProf: PropTypes.string.isRequired,
  TestimonialUsrCtgy: PropTypes.string.isRequired,
  TestimonialTitle: PropTypes.string.isRequired,
  TestimonialCont: PropTypes.string.isRequired,
  TestimonialStyle: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
