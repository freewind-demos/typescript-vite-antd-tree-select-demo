import React, {FC} from 'react';
import './Hello.pcss';
import {TreeSelect} from "antd";

type Props = {};

export const Hello: FC<Props> = ({}) => {
    return <div className={'Hello'}>
        <TreeSelect
            dropdownMatchSelectWidth={false}
            treeData={[
                {
                    title: 'aaa', value: 111, children: [
                        {title: 'bbb', value: 222},
                        {title: 'ccc', value: 333},
                    ]
                },
                {
                    title: 'bbb', value: 444
                }
            ]}/>
    </div>;
}
