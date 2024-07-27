"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface University {
  rank: number;
  name: string;
  country: string;
  score: number;
}

const Page: React.FC = () => {
  const [universities, setUniversities] = useState<University[]>([]);
  const [sortedUniversities, setSortedUniversities] = useState<University[]>([]);
  const [sortKey, setSortKey] = useState<keyof University>('rank');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    // Replace with your API endpoint
    axios.get('https://api.example.com/university-rankings')
      .then(response => {
        setUniversities(response.data);
        setSortedUniversities(response.data);
      })
      .catch(error => {
        console.error('Error fetching university rankings:', error);
      });
  }, []);

  const handleSort = (key: keyof University) => {
    const order = sortKey === key && sortOrder === 'asc' ? 'desc' : 'asc';
    const sorted = [...sortedUniversities].sort((a, b) => {
      if (a[key] < b[key]) return order === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return order === 'asc' ? 1 : -1;
      return 0;
    });
    setSortKey(key);
    setSortOrder(order);
    setSortedUniversities(sorted);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">World University Rankings</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-700 cursor-pointer" onClick={() => handleSort('rank')}>
                Rank {sortKey === 'rank' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
              </th>
              <th className="py-2 px-4 border-b border-gray-700 cursor-pointer" onClick={() => handleSort('name')}>
                University {sortKey === 'name' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
              </th>
              <th className="py-2 px-4 border-b border-gray-700 cursor-pointer" onClick={() => handleSort('country')}>
                Country {sortKey === 'country' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
              </th>
              <th className="py-2 px-4 border-b border-gray-700 cursor-pointer" onClick={() => handleSort('score')}>
                Score {sortKey === 'score' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedUniversities.map((university) => (
              <tr key={university.rank} className="hover:bg-gray-700">
                <td className="py-2 px-4 border-b border-gray-700">{university.rank}</td>
                <td className="py-2 px-4 border-b border-gray-700">{university.name}</td>
                <td className="py-2 px-4 border-b border-gray-700">{university.country}</td>
                <td className="py-2 px-4 border-b border-gray-700">{university.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;