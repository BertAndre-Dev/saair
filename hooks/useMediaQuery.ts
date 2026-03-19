import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQueryList = window.matchMedia(query);
    const onChange = () => setMatches(mediaQueryList.matches);

    onChange();
    // Safari < 14 compatibility.
    if (typeof mediaQueryList.addEventListener === "function") {
      mediaQueryList.addEventListener("change", onChange);
      return () => mediaQueryList.removeEventListener("change", onChange);
    }

    mediaQueryList.addListener(onChange);
    return () => mediaQueryList.removeListener(onChange);
  }, [query]);

  return matches;
};

export default useMediaQuery;

