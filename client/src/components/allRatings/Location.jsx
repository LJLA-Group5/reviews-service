import React, { useState } from 'react';
import styled from 'styled-components';

const Location = (props) => {
  const { data, average } = props;
  const [avgLoc, setavgLoc] = useState(0);
  const [doneLoading, setDoneLoading] = useState(false);

  if (data.length > 0 && !doneLoading) {
    setDoneLoading(true);
    setavgLoc(average(data, 'location').toPrecision(2));
  }

  const BarContainer = styled.div`
    height: 4px;
    width: 120px;
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
    grid-template-columns: 1fr 1fr;
    margin-bottom: 16px;

  `;

  const ScoreAndBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-top: 3px;
    padding-right: 95px;
  `;

  const MetricName = styled.div`
    display: flex;
    justify-content: flex-start;

  `;

  const MetricNum = styled.div`
    font-weight: 600;
    width: 17px;
    font-size: 12px;
    line-height: 13px;
    margin-left: 6px;

  `;

  return (
    <MetricContainer>
      <MetricName>
        Location
      </MetricName>
      <ScoreAndBar>
        <BarContainer>
          <BarFiller avg={avgLoc} />
        </BarContainer>
        <MetricNum>
          {avgLoc}
        </MetricNum>
      </ScoreAndBar>
    </MetricContainer>
  );
};

export default Location;
