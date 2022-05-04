import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function AdminPage() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="text-center text-2xl pt-10 font-bold">
        <div>Nao tens permisoes para aceder a esta pagina</div>
      </div>
    );
  }

  if (session.user?.email === process.env.ADMIN_EMAIL) {
    return (
      <div>
        <div>Admin</div>
      </div>
    );
  }

  return (
    <div>
      <div>Error</div>
    </div>
  );
}
