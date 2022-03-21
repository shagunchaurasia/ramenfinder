import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card.component";
import {
  WifiValues,
  PetValues,
  SmokingValues,
  KaraokeValues,
  LanguageValues,
} from "typings/RamenShop";
const api = `?key=f9dacf74bea74bda&large_area=Z011&format=json&count=12`;

const allPropsDummy = {
  name: "焼肉 牛陣 新宿東口店",
  address: "東京都新宿区歌舞伎町１-14-3 第103東京ビル6F",
  catch: "少人数からOK♪個室で焼肉 焼肉食べ放題2980円～♪",
  logo_image: "https://imgfp.hotp.jp/IMGH/07/55/P038980755/P038980755_69.jpg",
  photo: {
    pc: {
      l: "https://imgfp.hotp.jp/IMGH/07/57/P038980757/P038980757_238.jpg",
    },
  },
  wifi: "あり" as WifiValues,
  pet: "不可" as PetValues,
  non_smoking: "一部禁煙" as SmokingValues,
  karaoke: "なし" as KaraokeValues,
  english: "あり" as LanguageValues,
};

describe("Card Component tests", () => {
  it("renders HomePage component", () => {
    render(<Card id="test" rank={1} allProps={allPropsDummy} />);

    const cardContainer = screen.getByTestId("cardContainer");
    expect(cardContainer).toBeInTheDocument();
  });
});
