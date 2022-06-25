import Directory from "../../components/directory/Directory";
import { categories } from "../../components/CategoryData/categoryData";

function Home() {
  return (
    <div>
      <Directory categories={categories} />
    </div>
  );
}

export default Home;
