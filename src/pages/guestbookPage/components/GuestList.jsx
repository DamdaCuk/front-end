import { Avatar, List, Button } from "antd";

const GuestList = ({ data, handleDelete }) => {
  return (
    <List
      pagination={{
        position: "bottom",
        align: "center",
        pageSize: 6,
      }}
      dataSource={data.reverse()}
      renderItem={(item, index) => (
        <List.Item
          actions={[
            <Button
              key={index}
              type="text"
              danger
              onClick={() => handleDelete(item.commentId)}
            >
              X
            </Button>,
          ]}
        >
          <List.Item.Meta
            avatar={
              <Avatar
                src={`https://api.dicebear.com/9.x/miniavs/svg?seed=${item.commentId}`}
              />
            }
            description={item.comment}
          />
        </List.Item>
      )}
    />
  );
};

export default GuestList;
