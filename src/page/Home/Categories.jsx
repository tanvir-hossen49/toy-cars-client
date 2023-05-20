import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Category from "./Category";

const categoriesList = ["Sports Cars", "Police Car", "Truck"];

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState("Sports Cars");
  //https://toy-car-server-five.vercel.app/category/${activeTab}
  useEffect(() => {
    fetch(`http://localhost:5000/category/${activeTab}`)
      .then(res => res.json())
      .then(data => setCategories(data));
  }, [activeTab]);

  return (
    <div className="my-container">
      <h2 className="text-center font-bold md:text-4xl text-3xl mb-5 section-header">
        Shop By Category
      </h2>

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
