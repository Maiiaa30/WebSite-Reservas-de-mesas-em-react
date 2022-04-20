import { getSession } from "next-auth/react";

export default async (
  req: any,
  res: { send: (arg0: { content?: string; error?: string }) => void }
) => {
  const session = await getSession({ req });

  if (session) {
    res.send({
      content: "Cona",
    });
  } else {
    res.send({
      error: "Nao estas logado",
    });
  }
};
