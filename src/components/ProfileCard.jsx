import Image from "next/image";
import React from "react";

const ProfileCard = ({ instructor }) => {
  return (
    <>
      <div className="w-full rounded-xl shadow-xl shadow-black/50 border border-gray-500/50 bg-[#101e22] bg-opacity-70 backdrop-blur-xl p-3 min-w-[450px]">
        <p className="text-zinc-400 mb-8">{instructor.bio}</p>
        <div className="flex items-center gap-2 mt-auto">
          <figure className="img-box rounded-lg">
            <Image
              src={instructor.profile_picture}
              alt={instructor.name}
              width={100}
              height={100}
              className="object-cover w-20 h-20 rounded-lg"
              loading="lazy"
            />
          </figure>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <p>{instructor.name} </p>
              <p className="text-xs text-zinc-400 tracking-wider">
                {instructor.experience}
              </p>
            </div>
            <p className="text-zinc-400 mb-8">
              {instructor.courses_taught.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
