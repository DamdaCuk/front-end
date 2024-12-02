import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  PageContainer,
  EditButton,
  ContentContainer,
  GridContainer,
  RowContainer,
} from "./ContentPage.styled";
import ContentBox from "./components/ContentBox";
import { getContentsList } from "../../server/content";
import { USER_HOME_ID } from "../../config";
import BackButton from "../../components/BackButton";

const ContentPage = () => {
  const { category, homeId } = useParams();
  const [contents, setContents] = useState([]);
  const isMine = Number(homeId) === USER_HOME_ID;
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const result = await getContentsList(category, homeId);
        console.log(result);
        setContents(result);
      } catch (error) {
        console.error(`${category} 리스트 가져오는 중 오류 발생:`, error);
      }
    };

    fetchContents();
  }, [category, homeId]);

  const handleDelete = (contentId) => {
    setContents((prevContents) =>
      prevContents.filter((content) => content.contentId !== contentId)
    );
    setIsEdit(false);
  };

  const rows = [];
  const showContainer = isMine ? [null, ...contents] : contents;

  for (let i = 0; i < showContainer.length; i += 4) {
    rows.push(showContainer.slice(i, i + 4));
  }

  return (
    <PageContainer>
      <BackButton />
      {isMine && (
        <EditButton onClick={() => setIsEdit(!isEdit)}>
          {isEdit ? "Done" : "Edit"}
        </EditButton>
      )}
      <ContentContainer>
        {rows.length === 0 ? (
          <p>저장된 컨텐츠가 없습니다</p>
        ) : (
          <GridContainer>
            {rows.map((rowContent, rowIndex) => (
              <RowContainer key={rowIndex}>
                {rowContent.map((content, index) => (
                  <ContentBox
                    key={index}
                    category={category}
                    content={content}
                    index={rowIndex * 4 + index}
                    isEdit={isEdit}
                    isMine={isMine}
                    onDelete={handleDelete}
                  />
                ))}
              </RowContainer>
            ))}
          </GridContainer>
        )}
      </ContentContainer>
    </PageContainer>
  );
};

export default ContentPage;
