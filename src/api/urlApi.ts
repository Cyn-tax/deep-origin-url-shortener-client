import axios from 'axios';
import { ShortenedUrl } from "../components/UrlShortened";

const BASE_URL = process.env.REACT_APP_API_URL; // Replace this with your actual API URL

interface ShortenedUrlResponse {
  shortenedUrl: ShortenedUrl;
}

interface UserShortenedUrlResponse {
  userUrls: ShortenedUrl[];
}


export const shortenUrl = async (url: string): Promise<ShortenedUrl> => {
  try {
    const user = JSON.parse(localStorage.getItem('user') ?? "");
    const response = await axios.post<ShortenedUrlResponse>(`${BASE_URL}/api/shorten`, { url, user });
    return response.data.shortenedUrl;
  } catch (error) {
    console.error('Error shortening URL:', error);
    throw error;
  }
};

export const getUserShortenUrl = async (): Promise<UserShortenedUrlResponse> => {
  try {
    const user = JSON.parse(localStorage.getItem('user') ?? "");
    const response = await axios.get<UserShortenedUrlResponse>(`${BASE_URL}/api/user/urls`, { params: { user: user._id } });
    return response.data;
  } catch (error) {
    console.error('Error shortening URL:', error);
    throw error;
  }
};