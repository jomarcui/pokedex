import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Image
          alt="Pokémon"
          height={300}
          priority
          src="/pokemon.svg"
          width={300}
        />
      </div>
    </main>
  );
}
