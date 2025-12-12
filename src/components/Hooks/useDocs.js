import { useContext } from "react";
import GetDocsDBContext from "../../context/GetDocsDBContext";

export const useDocs = () => useContext(GetDocsDBContext);
