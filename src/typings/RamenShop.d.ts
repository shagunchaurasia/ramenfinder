export interface RamenShop {
  id: string;
  rank: number;
  allProps: {
    name: string;
    address: string;
    catch: string;
    logo_image: string;
    photo: { pc: { l: string } };
    // あり -possible なし- none 未確認- unconfirmed
    wifi: "あり" | "なし" | "未確認";
    // 可 - possible 不可 - Impossible
    pet: "可" | "不可";
    // 一部禁煙 - partially non smoking 全面禁煙 - no smoking    禁煙席なし - no non smoking seat
    non_smoking: "一部禁煙" | "全面禁煙" | "禁煙席なし";
    // なし - No  あり- can be
    karaoke: "なし" | "あり";
    english: "あり" | "なし";
  };
}

export interface RamenShopListing {
  filteredData: {
    ramenShop: CardProps[];
  }[];
}
