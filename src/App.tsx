import ComponentCard from "@/components/ComponentCard";
import componentsList from "@/utils/componentsList";

function App() {
  return (
    <div className="bg-gray-950 text-white w-screen h-screen flex flex-col items-center">
      <div> Search container </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {componentsList.map((component) => (
          <ComponentCard component={component} key={component.hashName} />
        ))}
      </div>
    </div>
  );
}

export default App;
