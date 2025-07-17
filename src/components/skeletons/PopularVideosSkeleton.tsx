function PopularVideosSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="block rounded-lg overflow-hidden bg-white shadow border border-gray-100 animate-pulse">
          <div className="relative w-full h-56 bg-gray-200" />
          <div className="h-4 bg-gray-200 rounded mt-4 mx-4 w-1/3" />
          <div className="h-5 bg-gray-200 rounded mt-2 mx-4 w-2/3" />
          <div className="h-4 bg-gray-200 rounded mt-3 mb-4 mx-4 w-1/2" />
        </div>
      ))}
    </div>
  );
}
export default PopularVideosSkeleton