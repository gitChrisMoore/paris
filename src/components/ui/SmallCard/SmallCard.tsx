import { FC } from 'react';
import BasicButton from '../../Buttons/BasicButton/BasicButton';

export interface ISmallCard {
  id: string | number;
  headline?: string;
  subhead?: string;
  supportingText?: string;
  actionBtnText: string;
}

export interface SmallCardProps {
  item: ISmallCard;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  onActionClick: (v: any) => void;
}

const SmallCard: FC<SmallCardProps> = (props) => {
  const { item, onActionClick } = props;
  return (
    <>
      <div className="bg-slate-100 shadow-md p-4 mb-2 rounded-xl w-full xs:w-100 sm:w-100 md:w-2/5 lg:w-1/3 xl:w-1/4">
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

export default SmallCard;
