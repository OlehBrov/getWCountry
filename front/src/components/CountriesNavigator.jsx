"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export const CountriesNavigator = ({ countries }) => {
  const [activeItem, setActiveItem] = useState("");

  const handleNav = (element) => {
    setActiveItem(element);
    setTimeout(() => {
      setActiveItem("");
    }, 4500);
  };
  return (
    <div className="grid-cols-2">
      <div className="grid grid-cols-7 gap-2">
        {countries.map((el) => (
          <Link
            key={el.codeLetter}
            className="uppercase text-2xl p-3 text-sky-900 text-center bg-sky-200 opacity-50 hover:opacity-100 hover:bg-sky-50 transition-all duration-300 rounded-lg"
            href={`#${el.codeLetter}`}
            onClick={() => handleNav(el.codeLetter)}
          >
            {el.codeLetter}
          </Link>
        ))}
      </div>
      <Accordion
        type="single"
        collapsible
        className="mt-6 grid grid-cols-1 gap-y-3 gap-x-9"
      >
        {countries.map((el) => (
          <AccordionItem
            id={el.codeLetter}
            key={el.codeLetter}
            value={el.codeLetter}
            className="bg-slate-400 rounded-md "
          >
            <AccordionTrigger
              className={`text-amber-950 px-5 hover:no-underline uppercase ${
                activeItem === el.codeLetter ? "animate-pulseCustom" : ""
              }`}
            >
              Countries, starting with "{el.codeLetter}"
            </AccordionTrigger>
            <AccordionContent className="bg-slate-100 p-5 grid grid-cols-4 gap-3">
              {el.countries.map((country) => (
                <Link
                  href={`country/${country.countryCode}`}
                  key={country.countryCode}
                  className="text-amber-950 cursor-pointer hover:text-amber-100 hover:bg-slate-400 transition-all duration-300 bg-slate-200 p-2 rounded-sm flex items-center justify-center"
                >
                  {country.name}
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
