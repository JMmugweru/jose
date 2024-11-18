import Image from "next/image";

const Card = ({ course, onClick }) => {
  return (
    <div
      className="duration-500 w-full rounded-xl hover:shadow-3xl hover:-translate-y-5 shadow-md shadow-black/50 border border-gray-500/50 bg-[#101e22] bg-opacity-70 backdrop-blur-xl cursor-pointer"
      onClick={() => onClick(course.id)}
    >
      <div className="grid place-items-center my-5">
        <Image src={course.image} alt={course.title} width={100} height={100} />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold">{course.title}</h3>
        <p className="text-sm lg:text-base text-gray-400 my-2">
          {course.description.slice(0, 100)}...
        </p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">${course.price}</span>
          <span className="text-lg text-[#f39c12]">⭐ {course.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
