import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    return await Reserva(req, res);
  } else if (req.method === "GET") {
    return await VerReservas(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function VerReservas(req: any, res: any) {
  try {
    const reservas = await prisma.reservaDeMesa.findMany();
    return res.status(200).json(reservas, { success: true });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Erro a ler da database", success: false });
  }
}

async function Reserva(req: any, res: any) {
  const body = req.body;
  try {
    const newEntry = await prisma.reservaDeMesa.create({
      data: {
        Pessoas: body.Pessoas,
        Nome: body.Nome,
        Data: body.Data,
        Hora: body.Hora,
        Numero: body.Numero,
      },
    });
    return res.status(200).json(newEntry, { success: true });
  } catch (error) {
    console.error("Request Error", error);
    res.status(500).json({ error: "Erro a reservar mesa", success: false });
  }
}
