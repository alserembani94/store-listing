import styles from "../styles/Home.module.css";
import axios from "axios";
import useSWR from "swr";

export default function Home() {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data.data);
  const { data, error } = useSWR(
    "https://money-flow-api-test.xsolla.com/api/v1/store/items?project_id=196778",
    fetcher
  );
  return (
    <div className={styles.container}>
      {data?.items.map((item: any) => (
        <div>
          <h1>{item.name}</h1>
          <p>ID: {item.item_id}</p>
          <p>SKU: {item.sku}</p>
          <a
            href={`https://nft-solutions.web.app/?merchant_id=319123&project_id=196778&item_sku=${item.sku}&item_id=${item.item_id}`}
          >
            Link to staging store for {item.sku}
          </a>
        </div>
      ))}
    </div>
  );
}
