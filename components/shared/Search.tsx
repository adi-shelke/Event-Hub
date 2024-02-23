"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
const Search = ({ placeholder = "Search title..." }:{placeholder?:string}) => {
  const [searchText, setsearchText] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    const delay = setTimeout(() => {
      let newUrl = "";
      if (searchText) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: searchText,
        });
      } else {
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: ["query"],
        });
      }
      router.push(newUrl, { scroll: false });
    }, 300);
    return () => clearTimeout(delay);
  }, [searchText, searchParams, router]);

  return (
    <div className="flex flex-center min-h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
      <Image
        src="/assets/icons/search.svg"
        width={24}
        height={24}
        alt="search"
      />
      <Input
        // value={searchText}
        onChange={(e) => setsearchText(e.target.value)}
        placeholder={placeholder}
        className="p-regular-16 border-0 bg-grey-50 outline-offset-0 placeholder:text-grey-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0 "
      />
    </div>
  );
};

export default Search;
