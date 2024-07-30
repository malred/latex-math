import TextArea from "antd/es/input/TextArea";
import {useState} from "react";
import {Card, Collapse, Select, Tag} from "antd";
import {MathJaxFormula} from "mathjax3-react";
import {
    BinaryOperator,
    Arrows,
    Greek,
    FlowerFont,
    others,
    BinaryRelations,
    BigOperator
} from "../constants/selectOptions";
import {MyTags} from "./MyTags";

export const Container = () => {
    const [math, setMath] = useState('');

    const onTagClick = (value) => {
        setMath(`${math} ${value}`)
    };

    const [activeTabKey2, setActiveTabKey2] = useState('');
    const onTab2Change = (key) => {
        setActiveTabKey2(key)
    };

    const tabListNoTitle = [
        {
            key: 'BinaryOperator',
            label: '二元运算符',
        },
        {
            key: 'BinaryRelations',
            label: '二元关系符',
        },
        {
            key: 'big',
            label: '大型运算符',
        },
        {
            key: 'others',
            label: '特殊符号',
        },
        {
            key: 'greek',
            label: '希腊字母',
        },
        {
            key: 'flower',
            label: '花体字',
        },
        {
            key: 'arrows',
            label: '箭头',
        },
    ];

    const contentListNoTitle = {
        BinaryOperator: <MyTags onTagClick={onTagClick} opts={BinaryOperator}></MyTags>,
        BinaryRelations: <MyTags onTagClick={onTagClick} opts={BinaryRelations}></MyTags>,
        others: <MyTags onTagClick={onTagClick} opts={others}></MyTags>,
        greek: <MyTags onTagClick={onTagClick} opts={Greek}></MyTags>,
        flower: <MyTags onTagClick={onTagClick} opts={FlowerFont}></MyTags>,
        big: <MyTags onTagClick={onTagClick} opts={BigOperator}></MyTags>,
        arrows: <MyTags onTagClick={onTagClick} opts={Arrows}></MyTags>,
    };

    return (
        <div className={'m-12'}>
            <Card className={'my-8 text-xl'} title="latex公式编辑器" bordered={false}>
                {/*<Collapse*/}
                {/*    className={'w-1/4'}*/}
                {/*    items={items}*/}
                {/*/>*/}
                <Card
                    className={'my-5'}
                    style={{width: '100%'}}
                    tabList={tabListNoTitle}
                    activeTabKey={activeTabKey2}
                    tabBarExtraContent={<a href="#">More</a>}
                    onTabChange={onTab2Change}
                    tabProps={{
                        size: 'middle',
                    }}
                >
                    {contentListNoTitle[activeTabKey2]}
                </Card>

                <TextArea rows={4}
                          rootClassName={' text-xl'}
                          onClick={() => {
                              setActiveTabKey2('')
                          }}
                          value={math}
                          onChange={(e) => setMath(e.target.value)}/>
            </Card>
            {/*<MathJax>{`\\(W \\gets W - \\eta \\frac{\\partial L}{\\partial W}\\)`}</MathJax>*/}
            {/*W \gets W - \eta \frac{\partial L}{\partial W}*/}
            <Card className={'my-8 text-xl'} title="解析结果" bordered={false}>
                <MathJaxFormula formula={`$$ ${math.replaceAll('$$', '')} $$`}/>
            </Card>
        </div>
    )
}