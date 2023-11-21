import format from "date-fns/format";
import Link from "next/link";
import React from "react";

type Article = {
  title: string;
  url: string;
  published_date: string;
  description: string;
  publisher: {
    name: string;
    url: string;
  };
};

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  return (
    <>
      <div className="bg-white rounded-md overflow-hidden shadow-md">
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
    </>
  );
}
