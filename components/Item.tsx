interface Props {
  item: any;
  merchant_id: number;
  project_id: number;
}

const Item: React.FC<Props> = ({ item, merchant_id, project_id }) => (
  <div className="rounded-lg overflow-hidden shadow-lg bg-slate-600 bg-opacity-50 text-white border border-slate-800">
    <img
      className="w-full h-40 object-cover"
      src={item.image_url}
      alt={item.name}
    />
    <div className="gap-2 p-8 grid grid-cols-1">
      <div className="flex-1 flex flex-col">
        <h1 className="text-4xl font-bold mb-2">{item.name}</h1>
        <p>ID: {item.item_id}</p>
        <p className="flex-1">SKU: {item.sku}</p>
      </div>
      <div className="grid grid-cols-2 gap-2 text-white mt-auto">
        <a
          href={`http://localhost:9020/?merchant_id=${merchant_id}&project_id=${project_id}&item_sku=${item.sku}&item_id=${item.item_id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 text-center px-8 py-4 rounded font-bold"
        >
          Local
        </a>
        <a
          href={`https://nft-solutions.web.app/?merchant_id=${merchant_id}&project_id=${project_id}&item_sku=${item.sku}&item_id=${item.item_id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 text-center px-8 py-4 rounded font-bold"
        >
          Staging
        </a>
        <a
          href={`https://test-nft-checkout.web.app/?merchant_id=${merchant_id}&project_id=${project_id}&item_sku=${item.sku}&item_id=${item.item_id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 text-center px-8 py-4 rounded font-bold"
        >
          Demo
        </a>
        <a
          href={`https://nft-checkout.babka.com/?merchant_id=${merchant_id}&project_id=${project_id}&item_sku=${item.sku}&item_id=${item.item_id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 text-center px-8 py-4 rounded font-bold"
        >
          Production
        </a>
      </div>
    </div>
  </div>
);

export default Item;
