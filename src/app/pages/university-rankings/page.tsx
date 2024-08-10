"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface University {
  rank: number;
  name: string;
  country: string;
  score: number;
}

const UniversityRankings: React.FC = () => {
  const [universities, setUniversities] = useState<University[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    axios.get('http://localhost:3001/api/universities')
      .then(response => {
        setUniversities(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        setError('Failed to fetch university rankings. Please try again later.');
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="min-h-screen bg-gray-900 text-white p-8 flex justify-center items-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen bg-gray-900 text-white p-8 flex justify-center items-center">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">World University Rankings</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-700">Rank</th>
              <th className="py-2 px-4 border-b border-gray-700">University</th>
              <th className="py-2 px-4 border-b border-gray-700">Country</th>
              <th className="py-2 px-4 border-b border-gray-700">Score</th>
            </tr>
          </thead>
          <tbody>
            {universities.map((university) => (
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

export default UniversityRankings;