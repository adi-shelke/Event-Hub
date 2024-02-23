"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { formUrlQuery } from "@/lib/utils";

type PaginationProps = {
  page: number | string;
  urlParamName?: string;
  totalPages: number;
};
const Pagination = ({ page, urlParamName, totalPages }: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (btnType: string) => {
    const pageValue = btnType === "next" ? Number(page) + 1 : Number(page) - 1;
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: urlParamName || "page",
      value: pageValue.toString(),
    });

    router.push(newUrl, { scroll: false });
  };
  return (
    <div className="flex gap-2">
      <Button
        size="lg"
        variant="outline"
        className="w-28"
        onClick={() => handlePageChange("previous")}
        disabled={Number(page) <= 1}
      >
        Previous
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="w-28"
        onClick={() => handlePageChange("next")}
        disabled={Number(page) >= totalPages}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
