import { Input, Space } from "antd";

export default () => {
  return (
    <Space align="start">
      <Space direction="vertical" size={16}>
        字数统计
        <Input.TextArea
          showCount
          style={{ width: 240 }}
          maxLength={20}
          placeholder="请输入"
        />
        <Input.TextArea
          style={{ width: 240 }}
          showCount
          maxLength={20}
          placeholder="请输入"
          defaultValue="清蒸桂鱼、麻辣小龙虾清蒸桂鱼123桂鱼"
        />
        <Input.TextArea
          allowClear
          showCount
          style={{ width: 240 }}
          maxLength={100}
          defaultValue="这是内容这是内容这是内容这是内容这是内容"
          placeholder="请输入"
        />
      </Space>
      <Space direction="vertical" size={16}>
        不带字数统计
        <Input.TextArea
          style={{ width: 240 }}
          placeholder="请输入"
          defaultValue="清蒸桂鱼、麻辣小龙虾清蒸桂鱼、123桂鱼"
        />
      </Space>
    </Space>
  );
};
