"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import format from "date-fns/format";

type ArticleData = {
  title: string;
  url: string;
  published_date: string;
  description: string;
  publisher: {
    name: string;
    url: string;
  };
};

export default function Crypto() {
  const searchQuery = "top profitable cryptocurrencies";
  const { data, isLoading, error } = useQuery({
    queryKey: ["cryptoarticles"],
    queryFn: async () => {
      const { data } = await axios.get(`/api/articles/${searchQuery}`);
      return data.articlesData as ArticleData[];
    },
  });

  const articles =
    data?.sort(
      (a, b) =>
        new Date(b.published_date).getTime() -
        new Date(a.published_date).getTime()
    ) || [];

  return (
    <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
      <div className="text-2xl font-bold tracking-tight">
        Cryptocurrencies Top Articles
      </div>
      {isLoading ? (
        <>
          <div
            className="flex justify-center items-center mx-auto pt-6"
            role="status">
            <svg
              aria-hidden="true"
              className="w-12 h-12 text-gray-200 animate-spin fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
          {articles && articles.length > 0 ? (
            articles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-md overflow-hidden shadow-md">
                <div className="p-6">
                  <Link
                    href={article.url}
                    className="text-xl font-bold text-gray-800 mb-3 hover:underline">
                    {article.title}
                  </Link>
                  <div className="flex items-center space-x-2 text-gray-600 pt-1">
                    <div className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full text-sm">
                      {article.publisher.name}
                    </div>
                    <span className="text-foreground-muted text-xs">
                      {format(new Date(article.published_date), "MMM dd, yyyy")}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No articles available</div>
          )}
        </div>
      )}
    </div>
  );
}
