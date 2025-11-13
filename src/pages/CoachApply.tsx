import React from "react";

const CoachApply: React.FC = () => {
  return (
    <main className="min-h-[60vh] px-4 py-16 max-w-4xl mx-auto bg-slate-50 text-slate-900">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">教練應徵</h1>
      <p className="text-lg mb-4">
        如果你熱愛桌球、喜歡和孩子互動，也認同玩童桌球的教學理念，
        歡迎加入我們的教練團隊！
      </p>
      {/* 之後這裡可以放表單、應徵流程、LINE 連結等等 */}
    </main>
  );
};

export default CoachApply;
