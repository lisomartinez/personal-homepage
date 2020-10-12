import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

type Props = {
  expanded: boolean;
};

const Icon = styled.div`
  width: 100%;
  height: 100%;
  color: black;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: 1.5rem;
`;

const ToggleIcon: React.FC<Props> = ({ expanded }) => {
  return (
    <Icon>
      {expanded ? (
        <FontAwesomeIcon data-testid="down" icon={faAngleDown} />
      ) : (
        <FontAwesomeIcon data-testid="right" icon={faAngleRight} />
      )}
    </Icon>
  );
};

export default ToggleIcon;
