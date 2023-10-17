import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Category from "./Category";
import SectionTitle from "../../components/sectionTitle";

const categoriesList = ["Sports Cars", "Police Car", "Truck"];

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState("Sports Cars");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `https://toy-car-server-five.vercel.app/category/${activeTab}`
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.log("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [activeTab]);

  return (
    <div className="my-container">
      <SectionTitle title="shop by category" />

      <Tabs>
        <TabList className="px-5 py-5 flex  bg-orange-100 rounded-lg justify-center gap-5">
          {categoriesList.map((name, i) => (
            <Tab
              key={i}
              onClick={() => setActiveTab(name)}
              className="md:text-2xl cursor-pointer text-1xl p-5 rounded-lg font-semibold"
            >
              {name}
            </Tab>
          ))}
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
            {categories.map(category => (
              <Category key={category._id} category={category} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
            {categories.map(category => (
              <Category key={category._id} category={category} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
            {categories.map(category => (
              <Category key={category._id} category={category} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};
export default Categories;
