import styled from 'styled-components';

export const Position = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: row;
`;

export const StartDate = styled.span`
  font-weight: bold;
`;

export const EndDate = styled.span`
  font-weight: bold;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
`;

export const Company = styled.div`
  font-style: normal;
  font-weight: normal;
`;

export const PositionHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  flex-grow: 1;
  flex-shrink: 1;
`;

export const Icon = styled.div`
  margin-right: 0.5rem;
`;

export const Separator = styled.span`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

export const PeriodHeader = styled.div`
  flex-grow: 3;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: wrap;
`;
