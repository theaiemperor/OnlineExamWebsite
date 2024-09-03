import Layout from "../../Layout";
import StyleWrapper from "./StyleWrapper";

export default function ({ children }) {
  return (
    <StyleWrapper>
      <Layout>{children}</Layout>
    </StyleWrapper>
  );
}
