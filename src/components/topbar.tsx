"use client"

import { UserRole } from "@/app/(main)/test/page";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function Topbar({
  role,
  onSwitchRole,
}: {
  role: UserRole;
  onSwitchRole: (r: UserRole) => void;
}) {
  const router = useRouter()

  async function handleSubmit() {
   const {error} = await authClient.signOut()
   if(error){
    toast.error(error.message || "Something went wrong")
   }else{
    toast.success("Signed out Successful")
    router.push("/sign-in")
   } 
  }


  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
          PTA
        </div>
        <div>
          <h1 className="text-lg font-semibold">St. Augustine PTA Portal</h1>
          <p className="text-sm text-slate-500">
            {role === "admin" ? "Administrator" : "Student"} view
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden sm:flex gap-2 items-center">
          <button
            onClick={() => onSwitchRole(role === "admin" ? "student" : "admin")}
            className="px-3 py-1.5 rounded bg-slate-100 text-slate-700 text-sm"
          >
            Switch to {role === "admin" ? "Student" : "Admin"}
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-sm text-slate-600" onClick={handleSubmit}>Signed in</div>
          <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
            U
          </div>
        </div>
      </div>
    </header>
  );
}
