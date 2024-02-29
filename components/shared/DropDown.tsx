import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ICategory } from "@/lib/database/models/category.model";
import { startTransition, useEffect, useState } from "react";
import { Input } from "../ui/input";
import {
  createCategory,
  getAllCategories,
} from "@/lib/actions/category.actions";
import { Button } from "../ui/button";
type DropDownProps = {
  value?: string;
  onChangeHandler?: () => void;
};
const DropDown = ({ value, onChangeHandler }: DropDownProps) => {
  const [categories, setcategories] = useState<ICategory[]>([]);
  const [newCategories, setnewCategories] = useState("");
  const [addCategory, setaddCategory] = useState("");

  const handleAddCategory = () => {
    createCategory({ categoryName: newCategories }).then((category) => {
      setcategories((prevState) => [...prevState, category]);
    });
  };

  useEffect(() => {
    const getCategories = async () => {
      const categoryList = await getAllCategories();
      categoryList && setcategories(categoryList as ICategory[]);
    };
    getCategories();
  }, []);

  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent className="py-3">
        {categories.length > 0 &&
          categories.map((category) => (
            <SelectItem
              key={category._id}
              value={category._id}
              className="select-item p-regular-14"
            >
              {category.name}
            </SelectItem>
          ))}
        <div className="w-full flex justify-center">
          <div className="w-[100%] flex flex-col">
            <Input
              type="text"
              placeholder="Category name"
              className="input-field mt-3"
              onChange={(e) => {
                setnewCategories(e.target.value);
              }}
            />
            <div className="cta flex justify-end">
              <Button
                className="mt-2"
                onClick={async () => {
                  setaddCategory("");
                  startTransition(handleAddCategory);
                }}
              >
                Add
              </Button>
            </div>
          </div>
        </div>
      </SelectContent>
    </Select>
  );
};

export default DropDown;
