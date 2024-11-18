import Image from "next/image";

const CourseDetails = ({ course }) => {
  return (
    <div className="container mx-auto gap-4 shadow-md shadow-black/50 border border-gray-500/50 bg-[#101e22] bg-opacity-70 backdrop-blur-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center p-5 rounded-md">
      <div className="grid gap-2">
        <Image
          width={150}
          height={100}
          src={course.image}
          alt={course.title}
          className="object-contain rounded-md"
        />
        <h1 className="text-2xl font-bold">{course.title}</h1>
        <p className="text-sm text-gray-400">{course.description}</p>
      </div>
      <div className="flex flex-col gap-2 text-left lg:items-center w-full">
        <p className="text-gray-400">
          <strong>Instructor:</strong> {course.instructor}
        </p>
        <p className="text-gray-400">
          <strong>Duration:</strong> {course.duration}
        </p>
        <p className="text-gray-400">
          <strong>Language:</strong> {course.language}
        </p>
      </div>
      <div className="grid gap-2 w-full">
        <div className="flex text-left lg:items-center gap-3">
          <span className="text-lg font-bold">${course.price}</span>
          <span className="text-lg font-bold">⭐ {course.rating}</span>
        </div>
        <h3 className="text-lg font-bold">Reviews</h3>
        <ul className="flex flex-col gap-2">
          {course.reviews.map((review, index) => (
            <li key={index} className="flex flex-col gap-2">
              <p className="text-gray-400">
                <strong>{review.user}</strong> - {review.date}
              </p>
              <p className="text-gray-400">Rating: ⭐ {review.rating}</p>
              <p className="text-gray-400">{review.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetails;
