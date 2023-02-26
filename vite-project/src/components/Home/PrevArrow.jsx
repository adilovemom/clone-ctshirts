import { BsChevronLeft } from "react-icons/bs";

export default function PrevArrow({ onClick }) {
  return (
    <div className="prevArrow-div1" onClick={onClick}>
      <div className="prevArrow-div2 ">
        <BsChevronLeft />
      </div>
    </div>
  );
}
