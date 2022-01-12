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
  message
} from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';


const formItemLayout = {
  labelCol: { span: 3},
  wrapperCol: { span: 10 },
};

const { Title } = Typography;


function onChange(value: any) {
  console.log(`selected ${value}`);
}

function onSearch(val:any) {
  console.log('search:', val);
}


const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
};

const { Option } = Select;


const props = {
    beforeUpload: file => {
      if (file.type !== 'image/png') {
        message.error(`${file.name} is not a png file`);
      }
      return file.type === 'image/png' ? true : Upload.LIST_IGNORE;
    },
    onChange: info => {
      console.log(info.fileList);
    },
  };


const Subidor = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
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
                    onFinish={onFinish}
                    initialValues={{
                        'input-number': 3,
                        'checkbox-group': ['A', 'B'],
                        rate: 3.5,
                    }}
                >
                 <Form.Item name="medio" label="Medio">
                        <Select
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
                    name="upload"
                    label="Upload"
                    valuePropName="fileList"

                >
                      <Upload {...props}>
                        <Button icon={<UploadOutlined />}>Upload png only</Button>
                      </Upload>,
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
