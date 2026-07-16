import React from "react";
import { RefreshCw } from "lucide-react";

const NotificationEmptyState = () => {
  return (
    <div className="py-20 flex flex-col items-center justify-center bg-white rounded-3xl border border-dashed border-slate-200">
      <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-6">
        <RefreshCw size={40} />
      </div>
      <h3 className="font-bold text-slate-900 mb-2">No system updates</h3>
      <p className="text-sm text-slate-500">
        You're all caught up with the latest platform changes.
      </p>
    </div>
  );
};

export default NotificationEmptyState;
