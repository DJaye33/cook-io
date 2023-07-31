import { useState } from "react";

type tabsProps = {
  id: number;
  name: string;
  current: boolean;
};

const OptionsButtonGroup = () => {
  const [tabs, setTabs] = useState<tabsProps[]>([
    { id: 1, name: "Breakfast", current: true },
    { id: 2, name: "Lunch", current: false },
    { id: 3, name: "Dinner", current: false },
    { id: 4, name: "Snack", current: false },
    { id: 5, name: "Teatime", current: false },
  ]);

  const [activeTab, setActiveTab] = useState<number>(1);

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const handleToggleTabs = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div className="border-b border-gray-200">
        <div className="-mb-px flex" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              onClick={() => handleToggleTabs(tab.id)}
              key={tab.id}
              className={classNames(
                activeTab === tab.id
                  ? "border-orange-500 text-orange-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                "w-1/4 border-b-2 py-4 px-1 text-center text-sm font-medium"
              )}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OptionsButtonGroup;
