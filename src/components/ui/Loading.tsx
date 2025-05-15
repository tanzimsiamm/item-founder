import { Spinner } from "@heroui/spinner";
import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/20 dark:bg-black/20 backdrop-blur-md">
      <div className="p-6 rounded-xl bg-white/10 backdrop-blur-xl border border-white/30">
        <Spinner />
      </div>
    </div>
  );
};

export default Loading;
