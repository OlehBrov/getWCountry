import Link from "next/link";
import { PopulationChart } from "./PopulationChart";

export const CurrentCountryInfo = ({ country, flag, population }) => {
  const flagSrc = flag ? flag.data.flag : "/img/no_flag.png";
  return (
    <div className="flex flex-col xl:grid xl:grid-cols-[400px_1fr] gris-rows-2">
      <div className="flex items-center">
        <h2 className="text-slate-800 text-4xl lg:text-6xl">{country.officialName}</h2>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-2">
        <div className="w-full lg:w-56 xl:w-64 flex items-center h-52 my-3 xl:m-0">
          <img
            className="w-full h-full object-contain"
            src={flagSrc}
            alt={`${country.officialName} flag`}
          />
        </div>
        <div>
          <div className="flex flex-row gap-2 mb-5">
            <p className="text-slate-800">Region: </p>
            <p className="text-slate-800 font-bold">{country.region}</p>
          </div>

          <div>
            <h3 className="text-slate-800 mb-3">Border countries:</h3>
            <ul className="flex gap-2 flex-wrap">
              {country.borders.map((c) => (
                <li key={c.countryCode}>
                  <Link
                    href={`/country/${c.countryCode}`}
                    className="flex text-slate-800 bg-slate-200 rounded-md p-2 w-full h-full"
                  >
                    {c.commonName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-auto flex flex-col items-center justify-center xl:col-span-2">
        <PopulationChart
          population={population.data}
          countryName={country.officialName}
        />
      </div>
    </div>
  );
};
