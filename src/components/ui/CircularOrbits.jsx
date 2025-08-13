import { OrbitingCircles } from "../../components/magicui/orbiting-circles";

import branOne from "/images/brands/cirrus.avif";
import branTwo from "/images/brands/tbm.avif";
import branThree from "/images/brands/pilatus.avif";
import branFour from "/images/brands/epic.avif";
import branFive from "/images/brands/diamond.avif";
import branSix from "/images/brands/beechcraft.avif";

const CircularOrbits = () => {
  return (
    <div className="relative overflow-hidden h-[500px] w-full">
      <OrbitingCircles>
        <branOne />
        <branTwo />
        <branThree />
        <branFour />
        <branFive />
        <branSix />
      </OrbitingCircles>
    </div>
  );
};

export default CircularOrbits;
