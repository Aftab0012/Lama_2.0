import Image from 'next/image';
import React from 'react';

function ProjectCards({ name, img }) {
  return (
    <div className="max-sm:w-[300px] rounded-2xl gap-10 w-72 flex items-center p-4 bg-white dark:bg-gray-800 shadow-md transition duration-300 ease-in-out transform hover:scale-105">
      <div className="mr-4">
        <Image
          className="rounded-xl"
          src={img}
          width={100}
          height={100}
          alt="project logo"
        />
      </div>
      <div className="text-xl text-black h3-bold dark:text-white">{name}</div>
    </div>
  );
}

export default ProjectCards;
