import React, { useState, useEffect } from 'react';
import { getUserShortenUrl } from "../api/urlApi";
import { ShortenedUrl } from "./UrlShortened";

const UserUrlTable: React.FC = () => {
  const [userUrls, setUserUrls] = useState<ShortenedUrl[]>([]);

  useEffect(() => {
    const fetchUserUrls = async () => {
      try {
        const response = await getUserShortenUrl(); // Assuming the route is configured correctly
        setUserUrls(response.userUrls);
      } catch (error) {
        console.error('Error fetching user URLs:', error);
      }
    };

    fetchUserUrls();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">User URLs</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shortened URL</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Visits</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {userUrls.map((userUrl, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a
                    href={userUrl.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline mr-2"
                  >
                    {userUrl.short_url}
                  </a></td>
                <td className="px-6 py-4 whitespace-nowrap">{userUrl.visits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserUrlTable;
