export type WifiValues  =   "あり" |"なし" | "未確認" 
export type PetValues = "可" | "不可";
export type SmokingValues = "一部禁煙" | "全面禁煙" | "禁煙席なし";
export type KaraokeValues = "なし" | "あり";
export type LanguageValues = "あり" | "なし";


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
    wifi: string;
    // 可 - possible 不可 - Impossible
    pet: string;
    // 一部禁煙 - partially non smoking 全面禁煙 - no smoking    禁煙席なし - no non smoking seat
    non_smoking: string;
    // なし - No  あり- can be
    karaoke: string;
    english: string;
  };
}

export interface RamenShopListing {
  filteredData: {
    ramenShop: CardProps[];
  }[];
}
