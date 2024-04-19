import React, { useState } from 'react';
import { shortenUrl } from "../api/urlApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export interface ShortenedUrl {
  url: string;
  short_url: string;
  slug: string;
  visits: number;
}

const UrlShortened: React.FC = () => {
  // Define state variables to hold input URL and shortened URL
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState<ShortenedUrl>();

  // Function to handle form submission and make API request
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response: ShortenedUrl = await shortenUrl(url);
      setShortenedUrl(response);
    } catch (error) {
      toast.error('Invalid Url');
      console.error('Error shortening URL:', error);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortenedUrl?.short_url ?? "");
    toast.success("Copy to Clipboard!")
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl mb-4">URL Shortener</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="border rounded p-2 mb-4 w-full"
            placeholder="Enter URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Shorten URL</button>
        </form>
        {shortenedUrl && (
          <div className="mt-4">
            <p className="mb-2">Shortened URL:</p>
            <div className="flex items-center">
              <a
                href={shortenedUrl.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline mr-2"
              >
                {shortenedUrl.short_url}
              </a>
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded"
                onClick={() => handleCopy()}
              >
                Copy
              </button>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div >
  );
};

export default UrlShortened;
