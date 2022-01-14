import {
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Rate,
  Checkbox,
  Row,
  Col,
  Typography,
  message,
} from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { useState } from "react";

const formItemLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 10 },
};

const { Title } = Typography;

function onChange(value: any) {
  console.log(`selected ${value}`);
}

function onSearch(val: any) {
  console.log("search:", val);
}

const onFinish = (values: any) => {
  console.log("Received values of form: ", values);
};

const { Option } = Select;

const props = {
  beforeUpload: (file) => {
    if (file.type !== "application/pdf") {
      message.error(`${file.name} is not a pdf file`);
    }
    return file.type === "application/pdf" ? true : Upload.LIST_IGNORE;
  },
  onChange: (info) => {
    console.log(info.fileList);
  },
};

const Subidor = () => {
  const [isHidden, setIsHidden] = useState(false);

  const btnForm = (values: any) => {
    setIsHidden(true);
    console.log("Received values of form: ", values);
  };

  return (
    <div>
      <div>
        <Title level={3}>Subidor</Title>
      </div>
      <div>
        <Form
          name="validate_other"
          {...formItemLayout}
          onFinish={btnForm}
          initialValues={{
            "input-number": 3,
            "checkbox-group": ["A", "B"],
            rate: 3.5,
          }}
        >
          <Form.Item id="medio" label="Medio">
            <Select
              id="medio"
              showSearch
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </Form.Item>

          <Form.Item
            id="upload"
            label="Upload"
            valuePropName="fileList"
            hidden={isHidden}
          >
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Upload pdf only</Button>
            </Upload>
            ,
          </Form.Item>

          <Form.Item wrapperCol={{ span: 1, offset: 12 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Subidor;
