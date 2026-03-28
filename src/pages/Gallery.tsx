export const Gallery = () => {
  const images = Array(8).fill(null).map((_, i) => `https://picsum.photos/seed/mami${i}/400/300`);

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4">
      <h1 className="text-5xl font-bold text-zinc-900 mb-12">Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <img key={i} src={img} alt="Event" className="w-full h-64 object-cover rounded-xl" />
        ))}
      </div>
    </div>
  );
};