export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-6">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <h2 className="text-5xl md:text-8xl font-creato mb-10">
            Arcipta.com
          </h2>
        </div>
        <div>
          <h3 className="text-sm font-azeret text-white/50 mb-4 h-6">
            Address
          </h3>
          <p className="font-azeret text-sm">
            Level up your business direction.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-azeret text-white/50 mb-4 h-6">
            Socials
          </h3>
          <div className="flex flex-col gap-2 font-azeret text-sm">
            <a href="#" className="hover:text-white/70">
              Instagram
            </a>
            <a href="#" className="hover:text-white/70">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
