/* eslint-disable jsx-a11y/alt-text */

import {
  Button,
  Form,
  InputNumber,
  message,
  Select,
  Space,
  Table,
  Typography,
  Upload,
  Image,
} from "antd";
import {
  UploadOutlined,
  InboxOutlined,
  DeleteOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const formItemLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 10 },
};

const { Column, ColumnGroup } = Table;
const { Title } = Typography;
const { Option } = Select;

function onChange(value: any) {}

function onSearch(val: any) {}

const onFinish = (values: any) => {};

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
const data = [
  {
    key: "1",
    imagen:
      "https://estaticos-cdn.elperiodico.com/clip/645e0b86-be98-4cd2-b30e-06f01884839c_alta-libre-aspect-ratio_default_0.jpg",
    lastName: "Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTNykibIYgaNb9QT917nWLyqI-3QKI28H_Q&usqp=CAU",
    lastName: "Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    imagen:
      "https://cdn2.excelsior.com.mx/Periodico/flip-nacional/14-01-2022/thumb_302x504_preview.jpg",
    lastName: "Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: any) => {},
};

const Subidor = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isHiddenTable, setIsHiddenTable] = useState(true);

  const btnForm = (values: any) => {
    setIsHidden(true);
    setIsHiddenTable(false);
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

          <Form.Item wrapperCol={{ span: 1, offset: 12 }} hidden={isHidden}>
            <Button
              type="ghost"
              htmlType="submit"
              style={{
                backgroundColor: "#1E3647",
                color: "white",
              }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div hidden={isHiddenTable}>
        <div>
          <Title level={5}>Imagenes cargadas</Title>
          <Space
            size={[10, 5]}
            style={{
              marginLeft: 10,
              marginBottom: 20,
              marginTop: 20,
            }}
          >
            <Button
              type="ghost"
              style={{
                backgroundColor: "#1E3647",
                color: "white",
              }}
            >
              <LinkOutlined />
            </Button>
            <Button
              type="ghost"
              style={{
                backgroundColor: "#9F1915",
                color: "white",
              }}
            >
              <DeleteOutlined />
            </Button>
          </Space>
        </div>
        <div>
          <Table
            rowSelection={{
              ...rowSelection,
            }}
            dataSource={data}
          >
            <Column
              title="Imagen"
              key="imagen"
              render={(text, record: any) => (
                <Space size="middle">
                  <Image width={100} src={record.imagen} />
                </Space>
              )}
            />
            <Column
              title="Página"
              key="pagina"
              render={(text, record: any) => (
                <Space size="middle">
                  <InputNumber
                    min={1}
                    max={10}
                    defaultValue={record.key}
                    onChange={onChange}
                  />
                </Space>
              )}
            />
            <Column
              title="IDDP"
              key="iddp"
              render={(text, record: any) => (
                <Space size="middle">
                  <Select
                    showSearch
                    placeholder="Seleciona IDDP"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                  >
                    <Option value="jack">PP</Option>
                    <Option value="lucy">P</Option>
                    <Option value="tom">PPP</Option>
                  </Select>
                </Space>
              )}
            />
            <Column
              title="Sección"
              key="seccion"
              render={(text, record: any) => (
                <Space size="middle">
                  <Select
                    showSearch
                    placeholder="Selecione sección"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                  >
                    <Option value="jack">Sección 1</Option>
                    <Option value="lucy">Sección 2</Option>
                    <Option value="tom">Sección 3</Option>
                  </Select>
                </Space>
              )}
            />
            <Column
              title="Unión"
              key="union"
              render={(text, record: any) => (
                <Space size="middle">
                  <Select
                    showSearch
                    placeholder="Selecciona lado"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                  >
                    <Option value="izquierdo">Izquierdo</Option>
                    <Option value="derecho">Derecho</Option>
                  </Select>
                </Space>
              )}
            />
          </Table>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <Button
              type="ghost"
              style={{
                backgroundColor: "#1E3647",
                color: "white",
              }}
            >
              CARGAR IMAGENES
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subidor;
