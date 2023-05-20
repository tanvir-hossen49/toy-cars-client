import { Quote } from "lucide-react";


const ReviewCard = ({ review }) => {
  const { name, message, designation, img } = review;
  return (
    <div className="bg-[#a4c0ca] text-white p-10 rounded-lg space-y-6">
      <Quote className="text-6xl text-black" />
      <p className="italic text-lg">{message}</p>
      <div className="flex items-center gap-5">
        <img src={img} alt="customer" className="rounded-full" />
        <div>
          <h4 className="text-2xl font-semibold">{name}</h4>
          <h1 className="font-light">{designation}</h1>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
