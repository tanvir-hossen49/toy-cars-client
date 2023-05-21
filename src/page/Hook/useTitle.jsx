import { useEffect } from "react";
const useTitle = title => {
  useEffect(() => {
    document.title = `Turbo | ${title}`;
  }, [title]);
};

export default useTitle;
