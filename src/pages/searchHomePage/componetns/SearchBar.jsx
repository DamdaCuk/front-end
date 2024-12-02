import { useState } from "react";
import styled from "styled-components";
import searchIcon from "../assets/search.png";
import { Select } from "antd";
import {
  VideoCameraOutlined,
  BookOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 1077px;
  max-width: 80%;
  height: 88px;
  padding: 0 30px;

  background: #bbd6be;
  border: none;
  border-radius: 3rem;
`;

const SearchInput = styled.input`
  flex: 800px;
  max-width: 80%;
  height: 70px;
  padding: 0 30px;

  font-size: 18px;

  border: none;
  outline: none;
  background: none;
`;

const SearchIcon = styled.img`
  cursor: pointer;
`;

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("movie");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(category, input);
    }
  };

  return (
    <SearchWrapper>
      <Select
        defaultValue="movie"
        style={{
          width: 120,
        }}
        options={[
          {
            value: "movie",
            label: (
              <>
                <VideoCameraOutlined style={{ marginRight: 8 }} />
                영화
              </>
            ),
          },
          {
            value: "book",
            label: (
              <>
                <BookOutlined style={{ marginRight: 8 }} />
                도서
              </>
            ),
          },
          {
            value: "music",
            label: (
              <>
                <CustomerServiceOutlined style={{ marginRight: 8 }} />
                음악
              </>
            ),
          },
        ]}
        onChange={(value) => setCategory(value)}
      />
      <SearchInput
        placeholder="제목을 입력하세요."
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <SearchIcon
        src={searchIcon}
        alt="돋보기"
        onClick={() => onSearch(category, input)}
      />
    </SearchWrapper>
  );
}
