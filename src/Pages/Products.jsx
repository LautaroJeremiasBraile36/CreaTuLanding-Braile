import GetDocsDB from "../utils/getDocsDB";
import GetDocsDBProvider from "../context/GetDocsDBProvider";

const Products = () => {
  return (
    <GetDocsDBProvider>
      <GetDocsDB />
    </GetDocsDBProvider>
  );
};

export default Products;
