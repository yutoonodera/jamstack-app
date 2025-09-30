// app/onody-diary/CalendarView.tsx
"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { LogPost } from "../lib/getLogPosts";
import "react-calendar/dist/Calendar.css";

const Calendar = dynamic(() => import("react-calendar"), { ssr: false });

type Props = { posts: LogPost[] };

export default function CalendarView({ posts }: Props) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentPostIndex, setCurrentPostIndex] = useState<number>(
    posts.length > 0 ? posts.length - 1 : 0
  );

  const postDates = Array.from(
    new Set(posts.map((p) => new Date(p.date).toDateString()))
  );
  const currentPost = posts[currentPostIndex] || null;

  const handlePrev = () => {
    if (currentPostIndex > 0) {
      setCurrentPostIndex((i) => i - 1);
      setSelectedDate(new Date(posts[currentPostIndex - 1].date));
    }
  };

  const handleNext = () => {
    if (currentPostIndex < posts.length - 1) {
      setCurrentPostIndex((i) => i + 1);
      setSelectedDate(new Date(posts[currentPostIndex + 1].date));
    }
  };

  const handleClickDay = (date: Date) => {
    const targetIndex = posts.findIndex(
      (p) => new Date(p.date).toDateString() === date.toDateString()
    );
    if (targetIndex !== -1) {
      setSelectedDate(date);
      setCurrentPostIndex(targetIndex);
    }
  };

  return (
    <>
      <Calendar
        onClickDay={handleClickDay}
        value={selectedDate || (currentPost ? new Date(currentPost.date) : null)}
        locale="ja-JP"
        tileDisabled={({ date }) => !postDates.includes(date.toDateString())}
        tileClassName={({ date }) => {
          const dateStr = date.toDateString();
          if (currentPost && new Date(currentPost.date).toDateString() === dateStr) {
            return "selected-post";
          }
          if (postDates.includes(dateStr)) return "has-post";
          return null;
        }}
      />

      <style jsx global>{`
        .react-calendar__tile.has-post {
          background: #facc15 !important;
          border-radius: 50%;
          font-weight: bold;
          color: #000;
        }
        .react-calendar__tile.selected-post {
          background: #3b82f6 !important;
          border-radius: 50%;
          font-weight: bold;
          color: #fff;
        }
      `}</style>

      <div className="mt-6">
        {currentPost ? (
          <>
            <h2 className="text-xl mb-2">
              {new Date(currentPost.date).toLocaleDateString("ja-JP")}（
              {new Date(currentPost.date).toLocaleDateString("ja-JP", { weekday: "short" })}
              ）の日記
            </h2>
            <div key={currentPost.id} className="mb-6 p-4 border rounded-lg shadow">
              <h3
                className="font-bold text-lg mb-2"
                dangerouslySetInnerHTML={{ __html: currentPost.title.rendered }}
              />
              <div className="prose" dangerouslySetInnerHTML={{ __html: currentPost.content.rendered }} />
            </div>

            <div className="flex justify-between">
              <button
                onClick={handlePrev}
                disabled={currentPostIndex === 0}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              >
                ← 前の記事
              </button>
              <button
                onClick={handleNext}
                disabled={currentPostIndex === posts.length - 1}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              >
                次の記事 →
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-500">投稿がありません。</p>
        )}
      </div>
    </>
  );
}
