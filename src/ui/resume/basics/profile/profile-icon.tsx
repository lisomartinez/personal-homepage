import React, { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Icon } from './profile-icon.styles';
import Devices from '../../../../utils/devices';

const iconByNetwork = new Map<string, ReactNode>([
  ['GitHub', <FontAwesomeIcon key="GitHub" icon={faGithub} size="3x" />],
  ['LinkedIn', <FontAwesomeIcon key="LinkedIn" icon={faLinkedin} size="3x" />],
]);

const getIcon = (network: string): ReactNode => {
  const icon = iconByNetwork.get(network);
  if (icon === undefined) return <span />;
  return icon;
};

type Props = {
  network: string;
};

const ProfileIcon: React.FC<Props> = (props: Props) => {
  return <Icon data-testid="icon">{getIcon(props.network)}</Icon>;
};

export default ProfileIcon;
