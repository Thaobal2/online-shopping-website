import { categories } from "../CategoryData/CategoryData";
import CategoryItem from "../CategoryItem/CategoryItem";
import "./Directory.scss";

const Directory = () => {
  return (
    <div className="directory__container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
