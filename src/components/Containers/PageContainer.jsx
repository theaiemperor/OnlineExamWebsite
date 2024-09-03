import { Helmet, HelmetProvider } from "react-helmet-async";
import { Constants } from "../../Store/general/Constants";

const PageContainer = ({ title, description, children }) => (
  <HelmetProvider>
    <div>
      <Helmet>
        <title>{title + " - " + Constants.app_name}</title>
        <meta name="description" content={description} />
      </Helmet>
      {children}
    </div>
  </HelmetProvider>
);

export default PageContainer;
