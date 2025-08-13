import React from "react";

const TabPanal = () => {
  return (
    <>
      <div style={styles.navContainer} className="2xl:w-[85%] w-full">
        <div
          onClick={() => setActiveTab("all")}
          style={{
            ...styles.tab,
            color: activeTab === "all" ? "white" : "#aaa",
          }}
        >
          {activeTab === "all" && (
            <motion.div
              layoutId="highlight"
              style={styles.highlight}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span style={{ position: "relative", zIndex: 1 }}>All</span>
        </div>

        {categories.map((tab) => (
          <div
            key={tab.slug}
            onClick={() => setActiveTab(tab.slug)}
            style={{
              ...styles.tab,
              color: activeTab === tab.slug ? "white" : "#aaa",
            }}
          >
            {activeTab === tab.slug && (
              <motion.div
                layoutId="highlight"
                style={styles.highlight}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              ></motion.div>
            )}
            <span style={{ position: "relative", zIndex: 1 }}>{tab.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default TabPanal;
