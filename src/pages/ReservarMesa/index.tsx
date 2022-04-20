import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function ReservarMesa() {
  const { data: session } = useSession();
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("../api/Mesa");
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  if (!session) {
    return (
      <div>
        <div>Nao estas logado</div>
      </div>
    );
  }
  return (
    <div>
      <div>
        Estas logado <br />
        {session.user?.name}
        <br />
        {session.user?.email}
        {content}
      </div>
    </div>
  );
}
