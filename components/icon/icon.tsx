import { IconEnum } from '@/types/icon';

import GithubIcon from '@/components/icon/icons/github';
import TwitterIcon from '@/components/icon/icons/twitter';

export interface IconProps {
  name: IconEnum | string;
  width?: string;
  height?: string;
  viewBox?: string;
  className?: string;
}

function Icon(props: IconProps) {
  const formattedProps = { ...props };

  formattedProps.width = formattedProps.width || '2.4rem';
  formattedProps.viewBox = formattedProps.viewBox || '0 0 24 24';
  formattedProps.className = formattedProps.className || '';

  switch (props.name) {
    case IconEnum.GITHUB:
      return <GithubIcon {...formattedProps} />;
    case IconEnum.TWITTER:
      return <TwitterIcon {...formattedProps} />;
    default:
      throw new Error(`Icon ${props.name} not found`);
  }
}

export default Icon;
