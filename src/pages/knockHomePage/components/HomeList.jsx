import styled from "styled-components";
import { useEffect, useState } from "react";
import { searchHome } from "../../../server/search";
import { HeartOutlined, HomeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { USER_HOME_ID } from "../../../config";

const List = styled.div`
  display: flex;
  gap: 100px;
  align-items: center;
  width: 98%;
  height: 80px;
  padding: 0 50px;
  border-radius: 1rem;
  border: 5px solid #bbd6be;
  margin: 10px;
`;

const KnockBtn = styled.button`
  background: #bbd6be;
  width: 135px;
  height: 60px;
  border: none;
  font-size: 20px;
  border-radius: 0.5rem;
`;

const HomeInfo = styled.div`
  font-size: 20px;
  width: 30%;
`;

const SearchHome = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 20px;
  padding-bottom: 50px;
`;

const HomeList = ({ contentsId, category }) => {
  const navigate = useNavigate();
  const [homeList, setHomeList] = useState([]);
  const [originalList, setOriginalList] = useState([]);

  useEffect(() => {
    const fetchHomeList = async () => {
      const result = await searchHome(contentsId, category);
      setOriginalList(result);
      setHomeList(result);
    };
    fetchHomeList();
  }, [contentsId, category]);

  const handleKnock = (homeId) => {
    navigate(`/${homeId}`);
  };

  const handleSort = (option) => {
    if (option === "likes") {
      setHomeList((prevList) =>
        [...prevList].sort((a, b) => b.likes - a.likes)
      );
    } else if (option === "register") {
      setHomeList(originalList);
    }
  };

  return (
    <SearchHome>
      <select
        style={{ width: "100px", padding: "10px", margin: "10px" }}
        onChange={(e) => handleSort(e.target.value)}
      >
        <option value="register">등록 순</option>
        <option value="likes">좋아요 순</option>
      </select>
      {homeList.map((result, index) => (
        <List key={index} className="result-item">
          <HomeInfo>
            <HomeOutlined style={{ marginRight: 8 }} />
            {result.homeName}
          </HomeInfo>
          <HomeInfo style={{ display: "flex", alignItems: "center" }}>
            <HeartOutlined style={{ marginRight: 8 }} />
            {result.likes}
          </HomeInfo>
          <KnockBtn onClick={() => handleKnock(result.homeId)}>
            {result.homeId === USER_HOME_ID ? "마이 홈" : "노크하기"}
          </KnockBtn>
        </List>
      ))}
    </SearchHome>
  );
};

export default HomeList;
