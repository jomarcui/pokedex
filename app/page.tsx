import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="w-full">
        <Image
          alt="Pokémon"
          className="mx-auto"
          height={300}
          priority
          src="/pokemon.svg"
          width={300}
        />
      </div>
      <div className="grow self-start w-full">Test</div>
    </main>
  );
}
