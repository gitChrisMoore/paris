import { FC } from 'react';
import BasicButton from '../../Buttons/BasicButton/BasicButton';

export interface IPictureCard {
  id: string | number;
  img_url: string;
  size?: number;
  headline?: string;
  subhead?: string;
  supportingText?: string;
  actionBtnText: string;
}

export interface PictureCardProps {
  item: IPictureCard;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  onActionClick: (v: any) => void;
}

const PictureCard: FC<PictureCardProps> = (props) => {
  const { item, onActionClick } = props;
  return (
    <>
      <div className="bg-white border shadow-md p-4 mb-2 rounded-xl w-full xs:w-100 sm:w-100 md:w-2/5 lg:w-1/3 xl:w-1/4">
        <img
          src={
            item.img_url
              ? item.img_url
              : `https://place-hold.it/${item.size}x${item.size}`
          }
          className="avatar image"
        />
        <div className="text-xl font-medium">{item.headline}</div>
        <div>{item.subhead}</div>
        <div>{item.supportingText}</div>
        <div>
          {' '}
          <div className="flex justify-end mt-4">
            <BasicButton
              onClick={() => onActionClick(item)}
              type="button"
              variant="primary">
              {item.actionBtnText}
            </BasicButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default PictureCard;
