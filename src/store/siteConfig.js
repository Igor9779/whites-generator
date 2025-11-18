let siteConfig = {
  siteName: "",
  address: "",
  phone: "",
  businessNumber: "",
  lang: "en",
  cookieVariant: "v1",
};

export const setSiteConfig = (newConfig) => {
  siteConfig = { ...siteConfig, ...newConfig };
};

export const getSiteConfig = () => siteConfig;
