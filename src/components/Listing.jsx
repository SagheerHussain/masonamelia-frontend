import React, {
  useState,
  useEffect,
  useMemo,
  useDeferredValue,
  useRef,
} from "react";
import { motion } from "framer-motion";
import FilterCheckboxList from "./FilterCheckboxList";
import Card from "./Card";
import Tabs from "./Tabs";
import Pagination from "./Pagination";
import FilterSideBar from "./FilterSideBar";
import planeOne from "/images/planes/plane (1).png";
import planeTwo from "/images/planes/plane (2).png";
import planeThree from "/images/planes/plane (1).avif";
import planeFour from "/images/planes/plane (2).avif";
import planeFive from "/images/planes/plane (3).avif";
import planeSix from "/images/planes/plane (4).avif";
import planeSeven from "/images/planes/plane (5).avif";
import planeEight from "/images/planes/plane (6).avif";
import planeNine from "/images/planes/plane (7).avif";
import planeTen from "/images/planes/plane (8).avif";
import { IoFilterSharp } from "react-icons/io5";

// Must match FilterCheckboxList
const AIRFRAME_OPTIONS = ["2500", "5000", "7500"];
const ENGINE_OPTIONS = ["2665", "3517/3421", "220", "3710", "380/380"];
const AIRCRAFT_OPTIONS = ["cirrus", "cessna", "piper", "tbm", "dassault"];

const airplanes = [
  {
    _id: "94827342a",
    aircraft: "cirrus",
    title: "Gulfstream G600",
    description:
      "Long-range business jet with advanced avionics and luxury interior.",
    image: planeOne,
    price: 58000000,
    airframe: "2500",
    engine: "2665",
    category: "acquired",
    propeller: "2352",
  },
  {
    _id: "dafda4353",
    aircraft: "cessna",
    title: "Pilatus PC-24",
    description:
      "Versatile light jet designed for short runways and global travel.",
    image: planeTwo,
    price: 11200000,
    airframe: "2500",
    engine: "2665",
    category: "for-sale",
    propeller: "2352",
  },
  {
    _id: "948affad23",
    aircraft: "dassault",
    title: "Dassault Falcon 8X",
    description:
      "Ultra-long-range trijet offering unmatched comfort and range.",
    image: planeThree,
    price: 62000000,
    airframe: "2500",
    engine: "2665",
    category: "for-sale",
    propeller: "2352",
  },
  {
    _id: "aasfa241",
    aircraft: "piper",
    title: "Cessna Citation Latitude",
    description:
      "Mid-size business jet combining performance with spacious comfort.",
    image: planeFour,
    price: 18500000,
    airframe: "2500",
    engine: "2665",
    category: "off-market",
    propeller: "2352",
  },
  {
    _id: "fada2341",
    aircraft: "tbm",
    title: "Embraer Legacy 500",
    description:
      "Mid-size luxury jet offering fly-by-wire technology and range efficiency.",
    image: planeFive,
    price: 20500000,
    airframe: "2500",
    engine: "2665",
    category: "wanted",
    propeller: "2352",
  },
  {
    _id: "342561",
    aircraft: "tbm",
    title: "Bombardier Global 7500",
    description:
      "Flagship ultra-long-range jet with exceptional speed and luxury.",
    image: planeSix,
    price: 75000000,
    airframe: "5000",
    engine: "2665",
    category: "sold",
    propeller: "2352",
  },
  {
    _id: "252571",
    aircraft: "piper",
    title: "HondaJet Elite",
    description:
      "Compact business jet with innovative over-the-wing engine design.",
    image: planeSeven,
    price: 7000000,
    airframe: "2500",
    engine: "2665",
    category: "sale-pending",
    propeller: "2352",
  },
  {
    _id: "adad24134",
    aircraft: "cessna",
    title: "Cessna Citation CJ4 Gen2",
    description:
      "Light jet with upgraded cabin comfort and strong runway performance.",
    image: planeEight,
    price: 10500000,
    airframe: "2500",
    engine: "2665",
    category: "coming-soon",
    propeller: "2352",
  },
  {
    _id: "24342342",
    aircraft: "cirrus",
    title: "Beechcraft King Air 260",
    description:
      "Twin-turboprop aircraft with advanced cockpit and reliability.",
    image: planeNine,
    price: 7200000,
    airframe: "5000",
    engine: "2665",
    category: "for-sale",
    propeller: "2352",
  },
  {
    _id: "25545426",
    aircraft: "cirrus",
    title: "Cirrus Vision Jet G2+",
    description:
      "Single-engine personal jet with modern design and versatility.",
    image: planeTen,
    price: 3450000,
    airframe: "5000",
    engine: "2665",
    category: "for-sale",
    propeller: "2352",
  },
];

const categories = [
  { name: "For Sale", slug: "for-sale" },
  { name: "Wanted", slug: "wanted" },
  { name: "Coming Soon", slug: "coming-soon" },
  { name: "Sale Pending", slug: "sale-pending" },
  { name: "Off Market", slug: "off-market" },
  { name: "Acquired", slug: "acquired" },
  { name: "Sold", slug: "sold" },
];

export default function Listing() {
  const sectionRef = useRef(null);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // helper: smooth scroll to section top (adjust offset if you have a sticky header)
  const scrollToSectionTop = (offset = 80) => {
    const el = sectionRef.current;
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const allPrices = useMemo(() => airplanes.map((a) => a.price), []);
  const minPrice = Math.min(...allPrices);
  const maxPrice = Math.max(...allPrices);
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

  const [filterOpen, setFilterOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Smoother UI during filter changes
  const deferredSelected = useDeferredValue(selectedFilters);
  const deferredPrice = useDeferredValue(priceRange);
  const deferredTab = useDeferredValue(activeTab);

  const filteredAirplanes = useMemo(() => {
    const sel = new Set(deferredSelected);
    const chosenAirframes = AIRFRAME_OPTIONS.filter((v) => sel.has(v));
    const chosenEngines = ENGINE_OPTIONS.filter((v) => sel.has(v));
    const chosenBrands = AIRCRAFT_OPTIONS.filter((v) => sel.has(v));

    return airplanes.filter((a) => {
      const priceOk =
        a.price >= deferredPrice[0] && a.price <= deferredPrice[1];
      const tabOk = deferredTab === "all" || a.category === deferredTab;

      const airframeOk =
        chosenAirframes.length === 0 || chosenAirframes.includes(a.airframe);
      const engineOk =
        chosenEngines.length === 0 || chosenEngines.includes(a.engine);

      const brand = (a.aircraft || "").toLowerCase();
      const brandOk = chosenBrands.length === 0 || chosenBrands.includes(brand);

      return priceOk && tabOk && airframeOk && engineOk && brandOk;
    });
  }, [deferredSelected, deferredPrice, deferredTab]);

  const totalPages = Math.ceil(filteredAirplanes.length / itemsPerPage);

  const paginatedAirplanes = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredAirplanes.slice(start, start + itemsPerPage);
  }, [filteredAirplanes, currentPage]);

  // When filters / price / tab changes → reset page + scroll to top
  useEffect(() => {
    setCurrentPage(1);
    scrollToSectionTop();
  }, [selectedFilters, priceRange, activeTab]);

  return (
    <section
      id="showroom"
      ref={sectionRef}
      className="bg-[#111218] relative z-[10] py-10"
    >
      <div className="container px-6">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-white pt-10">
            Explore Our Aircraft Collection
          </h1>
          <p className="text-white text-base max-w-3xl mx-auto mt-2">
            Browse a curated inventory of premium aircraft tailored for diverse
            missions and budgets.
          </p>
        </div>

        <div className="lg:block hidden animated-tabs mb-12">
          <Tabs
            categories={categories}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            isAllTab={true}
            showFilterToggle
            isFilterOpen={filterOpen}
            onToggleFilter={() => setFilterOpen((v) => !v)}
          />
        </div>

        <div className="filter mb-4 lg:hidden flex justify-end">
          <IoFilterSharp />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white flex items-center gap-2"
          >
            Filter
          </button>
        </div>

        <div className="flex">
          {filterOpen && (
            <motion.aside
              key="filter"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100%", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="hidden lg:block overflow-hidden pe-4 w-[25%]"
            >
              <motion.div
                layout
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-[#ffffff48] p-0 bg-transparent"
              >
                <FilterCheckboxList
                  selected={selectedFilters}
                  setSelected={setSelectedFilters}
                  range={priceRange}
                  setRange={setPriceRange}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                />
              </motion.div>
            </motion.aside>
          )}

          <div className="block">
            <FilterSideBar
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              minPrice={minPrice}
              maxPrice={maxPrice}
              categories={categories}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </div>

          <motion.div
            layout
            transition={{ duration: 0.2 }}
            className={`w-full ${
              filterOpen ? "lg:w-[70%] lg:ms-[5%]" : "lg:w-full lg:ms-0"
            }`}
          >
            {paginatedAirplanes.length === 0 ? (
              <div className="flex justify-center items-center">
                <p className="text-white text-lg">No data found.</p>
              </div>
            ) : (
              <>
                <motion.div
                  layout
                  transition={{ duration: 0.2 }}
                  className={`grid grid-cols-1 sm:grid-cols-2 ${
                    filterOpen ? "lg:grid-cols-3" : "lg:grid-cols-4"
                  } gap-8`}
                >
                  {paginatedAirplanes.map((airplane) => (
                    <Card key={airplane._id} detail={airplane} />
                  ))}
                </motion.div>

                <div className="flex justify-center mt-10">
                  <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={(_, value) => {
                      setCurrentPage(value);
                      scrollToSectionTop(); // smooth scroll on page change
                    }}
                    color="primary"
                  />
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
