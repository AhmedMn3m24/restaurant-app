"use client";

import Link from "next/link";
import { ArrowLeft, RefreshCcw } from "lucide-react";
export default function Error() {
  return (
<div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-800">
        404 - Page Not Found
      </h2>

      <Link
        href="/"
        className="flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-2 text-white hover:bg-orange-600"
      >
        <ArrowLeft className="h-5 w-5" />
        Back to Home
      </Link>
    </div>
  );
}