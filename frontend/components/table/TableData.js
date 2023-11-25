'use client';

import axios from 'axios';
import React from 'react';

const TableData = ({ data, backendURL, fetchData }) => {
  // Function to format createdAt date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleDelete = async (_id) => {
    const response = await axios.delete(`${backendURL}/delete/${_id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    fetchData();
  };

  return (
    <div>
      <table className="border w-[600px] lg:w-[795px] dark:border-gray-600">
        <thead className="bg-gray-200 dark:bg-gray-800">
          <tr>
            <th className="px-4 py-2 border-b dark:border-gray-600">Name</th>
            <th className="px-4 py-2 border-b dark:border-gray-600">
              Created At
            </th>
            <th className="px-4 py-2 border-b dark:border-gray-600">Status</th>
            <th className="px-4 py-2 border-b dark:border-gray-600">Edit</th>
            <th className="px-4 py-2 border-b dark:border-gray-600">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item._id}
              className="hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <td className="px-4 py-2 border-b dark:border-gray-600">
                {item.name}
              </td>
              <td className="px-4 py-2 border-b dark:border-gray-600">
                {formatDate(item.createdAt)}
              </td>
              <td className="px-4 py-2 border-b dark:border-gray-600">Done</td>
              <td className="px-4 py-2 border-b dark:border-gray-600">Edit</td>
              <td className="px-4 py-2 border-b dark:border-gray-600">
                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
