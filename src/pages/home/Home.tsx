import { useQuery } from '@tanstack/react-query';
import pokemon from '../../utils/api/pokemon';
import pokemonImage from '../../assets/images/pokemon-img.jpg';

interface ListDataProps {
  name: string;
  url: string;
}
function Home() {
  const fetchData = async () => {
    const { data } = await pokemon.getListPage();
    return data;
  };
  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchData,
  });

  return (
    <section className="relative h-screen flex flex-col justify-center items-center">
      <div
        style={{ backgroundImage: `url(${pokemonImage})` }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat
        before:absolute before:inset-0 before:bg-black/50 flex flex-col 
        items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="absolute inset-0 backdrop-blur-[3px]"></div>
        <div className="w-full relative flex flex-col gap-6 bg-white hover:bg-gray-100 rounded-lg shadow-3xl border border-gray-200  dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700">
          <div className="bg-gray-300 p-3 text-center">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Pokemon list</h2>
          </div>
          {isLoading && <p>Loading...</p>}
          <div className="flex flex-wrap justify-between gap-10 p-4">
            {data?.results?.map((pokemon: ListDataProps, index: number) => (
              <div key={index} className="flex-1 min-w-[20%] max-w-[30%] pl-2.5">
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {pokemon?.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
