import { CurrentCountryInfo } from "@/components/CurrentCountryInfo";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const CountryDetailsPage = async ({ params }) => {
  const { code } = await params;

  const countryInfoResponse = await fetch(
    `http://localhost:9999/api/country/${code}`
  );

  const countryFlagResponse = await fetch(
    `http://localhost:9999/api/country-data/flag/${code}`
  );

  const countryInfo = await countryInfoResponse.json();

  const countryFlag = await countryFlagResponse.json();

  const countryPopulationResponse = await fetch(
    `http://localhost:9999/api/country-data/population/${countryInfo.data.commonName}`
  );
  const populationData = await countryPopulationResponse.json();


  return (
    <main className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10">
          <CurrentCountryInfo
            country={countryInfo.data}
            flag={countryFlag.data}
            population={populationData.data}
          />
        </MaxWidthWrapper>
      </section>
    </main>
  );
};
export default CountryDetailsPage;
