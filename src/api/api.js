export const datas = [
  {
    id: 1,
    Campaigns: "C1-APR2022",
    Adsets: 10,
    Ads: 22,
    Revenue: "24,000",
    Spend: "$8,000",
    ROAS: "$3",
    Impressions: 2700,
    Reach: "89,000",
    Conversions: 24,
    Leads: 270,
    Budget: "$10,000",
  },
  {
    id: 2,
    Campaigns: "C1-APRI2023",
    Adsets: 20,
    Ads: 22,
    Revenue: "24,000",
    Spend: "$8,000",
    ROAS: "$3",
    Impressions: 2700,
    Reach: "89,000",
    Conversions: 24,
    Leads: 270,
    Budget: "$10,000",
  },
  {
    id: 3,
    Campaigns: "C1-APRI2024",
    Adsets: 30,
    Ads: 22,
    Revenue: "24,000",
    Spend: "$8,000",
    ROAS: "$3",
    Impressions: 2700,
    Reach: "89,000",
    Conversions: 24,
    Leads: 270,
    Budget: "$10,000",
  },
  {
    id: 4,
    Campaigns: "C1-APR2025",
    Adsets: 33,
    Ads: 24,
    Revenue: "34,000",
    Spend: "$8,800",
    ROAS: "$5",
    Impressions: 2700,
    Reach: "99,000",
    Conversions: 24,
    Leads: 280,
    Budget: "$20,000",
  },
  {
    id: 5,
    Campaigns: "C1-APR2025",
    Adsets: 33,
    Ads: 24,
    Revenue: "34,000",
    Spend: "$8,800",
    ROAS: "$5",
    Impressions: 2700,
    Reach: "99,000",
    Conversions: 24,
    Leads: 280,
    Budget: "$20,000",
  },
  {
    id: 6,
    Campaigns: "C1-APR2333",
    Adsets: 34,
    Ads: 22,
    Revenue: "34,000",
    Spend: "$8,800",
    ROAS: "$5",
    Impressions: 2700,
    Reach: "99,000",
    Conversions: 24,
    Leads: 280,
    Budget: "$20,000",
  },
  {
    id: 7,
    Campaigns: "C1-APR2025",
    Adsets: 33,
    Ads: 24,
    Revenue: "34,000",
    Spend: "$8,800",
    ROAS: "$5",
    Impressions: 2700,
    Reach: "99,000",
    Conversions: 24,
    Leads: 280,
    Budget: "$20,000",
  }
];
export const fetchonedata = async (id) => {
  // const filtered = datas.filter((data) => {
  //   return data.id === id;
  // });
  return datas[id];
};

export const fetchalldata = async () => {
  return datas;
};
export const searchItems = (searchValue) => {
  if (searchValue !== "") {
    const filteredData = datas.filter((item) => {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    });
    return filteredData;
  } else {
    return datas;
  }
};
