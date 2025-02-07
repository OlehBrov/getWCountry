import { CoutriesList } from "@/components/CountriesList";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <main className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10">
          <CoutriesList />
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
