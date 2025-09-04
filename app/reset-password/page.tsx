 "use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { ResetPasswordForm } from "@/components/ResetPasswordForm/ResetPasswordForm";

export default function ResetPasswordPage() {
  
  return (
    <div className="p-8 max-w-md mx-auto">
          <Suspense fallback={<div>Loading...</div>}>
      <h1 className="text-xl font-bold mb-4">Reset password</h1>
      <ResetPasswordForm />

     </Suspense>
    </div>
  );
}

