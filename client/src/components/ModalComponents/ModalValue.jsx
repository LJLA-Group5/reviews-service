import React, { useState } from 'react';
import styled from 'styled-components';

const ModalValue = (props) => {
  const { data, average } = props;
  const [avgVal, setAvgVal] = useState(0);
  const [doneLoading, setDoneLoading] = useState(false);

  if (data.length > 0 && !doneLoading) {
    setDoneLoading(true);
    setAvgVal(average(data, 'value').toPrecision(2));
  }

  const BarContainer = styled.div`
    height: 4px;
    width: 103px;
    background-color: #e0e0de;
    border-radius: 5px;
    margin: 5px;
  `;

  const BarFiller = styled.div`
    height: 4px;
    width:  ${({ avg }) => avg * 20}%;
    background-color: black;
    border-radius: inherit;
  `;

  const MetricContainer = styled.div`
    display: grid;
    height: 20px;
    margin-bottom: 12px;
    grid-template-columns: 1fr 1fr;

  `;

  const ScoreAndBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-top: 3px;
    padding-right: 40px;
  `;

  const MetricName = styled.div`
  font-size:14px;
    display: flex;
    justify-content: flex-start;

  `;

  const MetricNum = styled.div`
    font-weight: 600;
    width: 18px;
    font-size: 12px;
    line-height: 13px;
    margin-left: 6px;

  `;

  return (
    <MetricContainer>
      <MetricName>
        Value
      </MetricName>
      <ScoreAndBar>
        <BarContainer>
          <BarFiller avg={avgVal} />
        </BarContainer>
        <MetricNum>
          {avgVal}
        </MetricNum>
      </ScoreAndBar>
    </MetricContainer>
  );
};

export default ModalValue;
