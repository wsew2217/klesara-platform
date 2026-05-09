export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
          Klesara
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 max-w-xl mb-2 italic">
          From the Greek <span className="text-neutral-200">klēsis</span> — calling.
        </p>
        <p className="text-base md:text-lg text-neutral-400 max-w-xl mb-12">
          A platform for ministry, learning, and the work of the church.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full mb-16">
          <div className="border border-neutral-800 rounded-lg p-6 text-left">
            <div className="text-sm text-neutral-500 mb-1">Coming first</div>
            <div className="text-lg font-medium mb-1">Klesara Bible</div>
            <div className="text-sm text-neutral-400">
              Free Sunday school and Bible study for every age.
            </div>
          </div>
          <div className="border border-neutral-800 rounded-lg p-6 text-left">
            <div className="text-sm text-neutral-500 mb-1">In development</div>
            <div className="text-lg font-medium mb-1">Klesara Academy</div>
            <div className="text-sm text-neutral-400">
              Homeschool, co-op, and microschool tools.
            </div>
          </div>
          <div className="border border-neutral-800 rounded-lg p-6 text-left">
            <div className="text-sm text-neutral-500 mb-1">In development</div>
            <div className="text-lg font-medium mb-1">Klesara Church</div>
            <div className="text-sm text-neutral-400">
              Service planning, member care, and giving.
            </div>
          </div>
          <div className="border border-neutral-800 rounded-lg p-6 text-left">
            <div className="text-sm text-neutral-500 mb-1">In development</div>
            <div className="text-lg font-medium mb-1">Klesara Tutoring</div>
            <div className="text-sm text-neutral-400">
              One-on-one and small-group tutoring, online and in person.
            </div>
          </div>
        </div>

        <div className="text-sm text-neutral-500">
          Built by Aquiline LLC. Coming soon.
        </div>
      </div>

      <footer className="border-t border-neutral-900 py-6 px-6 text-center text-xs text-neutral-600">
        © 2026 Aquiline LLC. Klesara, Whosoever Will, and Nehiloth Music are products of Aquiline LLC.
      </footer>
    </main>
  );
}
