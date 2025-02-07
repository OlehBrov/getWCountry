import { CountriesNavigator } from "./CountriesNavigator";

export const CoutriesList = async () => {
  const response = await fetch("http://localhost:9999/api/country");

  const countriesList = await response.json();
  const structuredList = countriesList.data.reduce((acc, country) => {
    const codeLetter = country.countryCode[0];
    const group = acc.find((item) => item.codeLetter === codeLetter);

    if (!group) {
      acc.push({ codeLetter, countries: [country] });
    } else {
      group.countries.push(country);
    }
    return acc;
  }, []);

  
  return (
    <div className="flex flex-col">
      <div className="w-full justify-center mb-7">
        <h1 className="text-slate-800 uppercase text-center font-bold">
          You can select country to get more information
        </h1>
      </div>
      <CountriesNavigator countries={structuredList} />
    </div>
  );
};
