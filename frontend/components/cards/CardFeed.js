'use client';

import React, { useEffect, useState } from 'react';
import NoResult from '../shared/NoResult';
import ProjectCards from './ProjectCards';
import axios from 'axios';
import Link from 'next/link';

const CardFeed = () => {
  const [data, setData] = useState([]);
  const backendURL = `http://localhost:3002/projects`;

  function getRandomImage() {
    const imagePool = ['/assets/images/blue.png', '/assets/images/orange.png'];
    const randomIndex = Math.floor(Math.random() * imagePool.length);
    return imagePool[randomIndex];
  }

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await axios.get(backendURL, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProjects();
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        <div className="flex-wrap gap-7 flex-center ">
          {data.map((project) => (
            <Link href={'/workspace'}>
              <ProjectCards
                key={project._id}
                img={getRandomImage()}
                name={project.name}
              />
            </Link>
          ))}
        </div>
      ) : (
        <NoResult
          title="No Projects Found"
          description="Be the first to break the silence!
            🚀 Start a Project and kickstart the creativity.
            our project could be the next big thing others learn from.
            Get involved! 💡"
        />
      )}
    </div>
  );
};

export default CardFeed;
