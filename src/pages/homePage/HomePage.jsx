import { useNavigate, useParams } from "react-router-dom";
import {
  PageContainer,
  TurntableContainer,
  BookcaseContainer,
} from "./HomePage.styled";
import Turntable from "./assets/img/turntable.png";
import Bookcase from "./assets/img/Bookcase.png";
import Poster from "./components/Poster";
import Door from "./components/Door";
import Like from "./components/Like";
import Share from "./components/Share";
import { USER_HOME_ID } from "../../config";

const HomePage = () => {
  const navigate = useNavigate();
  const { homeId } = useParams();
  const numericHomeId = Number(homeId);
  const isMine = numericHomeId === USER_HOME_ID;

  const toContent = (category) => {
    navigate(`/content/${category}`);
  };

  return (
    <PageContainer>
      <BookcaseContainer
        src={Bookcase}
        alt="책장 이미지"
        onClick={() => toContent("book")}
      />
      <Poster homeId={homeId} onClick={() => toContent("movie")} />
      <TurntableContainer
        src={Turntable}
        alt="턴테이블 이미지"
        onClick={() => toContent("music")}
      />
      <Door />
      {!isMine && <Like homeId={homeId} />}
      <Share />
    </PageContainer>
  );
};

export default HomePage;
