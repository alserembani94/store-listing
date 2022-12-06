import axios from "axios";
import useSWR from "swr";
import { useRouter } from "next/router";
import Item from "../components/Item";

export default function Home() {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data.data);
  const router = useRouter();
  const merchant_id = router.query.merchant_id
    ? Number(router.query.merchant_id)
    : 319123;
  const project_id = router.query.project_id
    ? Number(router.query.project_id)
    : 196778;
  const { data, error } = useSWR(
    `https://money-flow-api-test.xsolla.com/api/v1/store/project/${project_id}/items/nft`,
    fetcher
  );
  return (
    <div className="bg-slate-800">
      <div className="sticky top-0 bg-amber-300 px-8 py-4 text-center">
        <p>
          To use different project, just add `merchant_id` OR `project_id` OR
          both to the url query.
          <br />
          The default configuration is
          `/?merchant_id=319123&amp;project_id=196778`
        </p>
      </div>
      <div className="p-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.items.map((item: any) => (
          <Item
            item={item}
            merchant_id={merchant_id}
            project_id={project_id}
            key={item.item_id}
          />
        ))}
      </div>
    </div>
  );
}
