import { useState, useEffect } from "react";
import {
  PosterContainer,
  PosterBackground,
  PosterPin,
} from "../assets/styles/Poster.styled";
import { getPosterList } from "../../../server/content";
import { MOVIE_API_URL } from "../../../config";
import poster from "../assets/img/poster.png";

const Poster = ({ homeId, onClick }) => {
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getPosterList(homeId);
        const imgURL = result.map((item) => item?.itemImg || null);
        setPosters(imgURL);
      } catch (error) {
        console.error("포스터 이미지 가져오는 중 오류 발생:", error);
        setPosters([]);
      }
    };

    fetchData();
  }, []);

  return (
    <PosterContainer>
      {posters.map((posterImage, index) => (
        <PosterBackground
          key={index}
          onClick={onClick}
          className={index === 2 ? "third-poster" : ""}
          $image={posterImage ? `${MOVIE_API_URL}${posterImage}` : null}
        >
          <PosterPin src={poster} />
        </PosterBackground>
      ))}
    </PosterContainer>
  );
};

export default Poster;
