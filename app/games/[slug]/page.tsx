"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

const Game = () => {
  const { slug }: { slug: string } = useParams();

  return <Link href="/games">{slug}</Link>;
};

export default Game;
