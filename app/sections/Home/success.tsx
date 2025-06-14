'use client'
import { API_URL } from "@/app/api-services/api_url";
import api from "@/app/api-services/axios";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { useEffect, useState } from "react";

type VideoItem = {
  id: number;
  username: string;
  thumbnail: string;
  video: string;
};

export async function getSuccessVideos() {
  const response = await api.get(API_URL.HOME.SUCCESS_VIDEOS);
  return response.data;
}

const initialVideos: VideoItem[] = [
  {
    id: 1,
    username: "@whatnextoverseas",
    thumbnail: "/success1.svg",
    video: "#",
  },
  {
    id: 2,
    username: "@whatnextoverseas",
    thumbnail: "/success2.svg",
    video: "#",
  },
  {
    id: 3,
    username: "@whatnextoverseas",
    thumbnail: "/success3.svg",
    video: "#",
  },
  {
    id: 4,
    username: "@whatnextoverseas",
    thumbnail: "/success1.svg",
    video: "#",
  },
  {
    id: 5,
    username: "@whatnextoverseas",
    thumbnail: "/success2.svg",
    video: "#",
  },
];

const VoiceOfSuccess = () => {
  const [videos, setVideos] = useState<VideoItem[]>(initialVideos);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await getSuccessVideos();
        if (data && data.length > 3) {
          const formattedVideos = data.map((item: VideoItem, index: number) => ({
            id: index + 1,
            username: item.username || "@whatnextoverseas",
            thumbnail: item.thumbnail || `/success${(index % 3) + 1}.svg`,
            video: item.video || "#"
          }));
          setVideos(formattedVideos);
        }
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  console.log(videos);

  return (
    <section className="py-16 px-6 lg:px-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-10">Voice of Success</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative rounded-xl overflow-hidden shadow-md group hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <Image
              src={video.thumbnail}
              alt={`Thumbnail for video ${video.id}`}
              width={300}
              height={500}
              className="w-full h-full object-cover"
            />
            <div className="absolute flex items-center gap-2 top-2 left-2  px-2 py-1 text-xs font-semibold">
              <Image src="/smallLogo.svg" alt="Thumbnail for video 1" width={20} height={20} className="w-full h-full object-cover" />
              <p>{video.username}</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform">
                <FaPlay className="text-blue-600 w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Dots Placeholder */}
      <div className="mt-8 flex justify-center gap-2">
        <span className="w-3 h-3 bg-blue-600 rounded-full" />
        <span className="w-3 h-3 bg-gray-300 rounded-full" />
        <span className="w-3 h-3 bg-gray-300 rounded-full" />
      </div>
    </section>
  );
};

export default VoiceOfSuccess;
