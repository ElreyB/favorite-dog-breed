import { useEffect, useState } from "react";

export default function useImageStatus(url) {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    setStatus("loading");
    fetch(url, { mode: "no-cors" })
      .then(() => {
        setStatus("loaded");
      })
      .catch(() => setStatus("error"));
  }, [url]);

  return status;
}
