import { Button, Space } from "antd";
import "../../space/index.less";
import PlusOutlined from "@sensoro-design/icons/PlusOutlined";

export default () => {
  return (
    <Space direction="vertical">
      <Space size={32}>
        <Button type="primary">主要按钮</Button>
        <Button style={{ marginRight: 24 }}>基础按钮</Button>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          style={{ marginRight: 4 }}
        >
          主要按钮
        </Button>
        <Button icon={<PlusOutlined />}>基础按钮</Button>
      </Space>
      <Space size={32}>
        <Button type="primary">主要按钮</Button>
        <Button loading>基础按钮</Button>
        <Button loading type="primary" icon={<PlusOutlined />}>
          主要按钮
        </Button>
        <Button loading icon={<PlusOutlined />}>
          基础按钮
        </Button>
      </Space>
    </Space>
  );
};
