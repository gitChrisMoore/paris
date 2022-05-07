import { FC } from 'react';
import ArrowRight from '../../../components/ui/icons/ArrowRight';

export interface ProfileContainerItemProps {
  headline: string;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  onActionClick: (v: any) => void;
}

const ProfileContainerItem: FC<ProfileContainerItemProps> = (props) => {
  const { headline } = props;
  return (
    <>
      <div className="flex justify-between my-8">
        <div>{headline}</div>
        <div>
          <ArrowRight />
        </div>
      </div>
    </>
  );
};

export default ProfileContainerItem;
