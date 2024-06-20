import { useEffect, useState } from "react";

function useCurrencyInfo(currency1) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/ca4e122f5531f686b63f66f2/latest/${currency1}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.conversion_rates) {
          setData(res.conversion_rates);
        } else {
          console.error("Invalid response structure", res);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [currency1]);
  console.log(data);

  return data;
}

export default useCurrencyInfo;
