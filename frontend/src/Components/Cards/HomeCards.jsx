import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, RightCircleOutlined } from '@ant-design/icons';
import React from 'react';
const { Meta } = Card;

export default function HomeCards({title, description, imgSrc}) {

    return (
        <Card
            style={{ width: 400, height: 400, margin: "0 10px 10px 0"}}
            cover={
                <img
                    alt="example"
                    src={imgSrc}
                    height="250px"
                    style={{"objectFit": "scale-down"}}
                />
            }
            actions={[
                <RightCircleOutlined key="Choose" title="Choose" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Meta
                title={title}
                description={description}
            />
        </Card>
    );
}