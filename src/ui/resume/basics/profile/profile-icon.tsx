import React, { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Icon } from './profile-icon.styles';

const iconByNetwork = new Map<string, ReactNode>([
  ['GitHub', <FontAwesomeIcon key="GitHub" icon={faGithub} size="2x" />],
  ['LinkedIn', <FontAwesomeIcon key="LinkedIn" icon={faLinkedin} size="2x" />],
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
  return <Icon>{getIcon(props.network)}</Icon>;
};

export default ProfileIcon;
