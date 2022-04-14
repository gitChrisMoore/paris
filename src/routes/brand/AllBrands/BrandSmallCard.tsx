import BasicButton from '../../../components/Buttons/BasicButton/BasicButton';
import CardSmall from '../../../components/CardSmall/CardSmall';
import { IBrand } from '../../../interfaces/IBrand';

interface Props {
  brand: IBrand;
}

const BrandSmallCard = (props: Props) => {
  const { brand } = props;

  return (
    <div className="bg-slate-200 p-4 mb-2 rounded-xl w-full xs:w-100 sm:w-100 md:w-2/5 lg:w-1/3 xl:w-1/4">
      <CardSmall headline={brand.name} subhead={brand.description}>
        <div className="flex justify-end mt-4">
          <BasicButton type="submit" variant="primary">
            join
          </BasicButton>
        </div>
      </CardSmall>
    </div>
  );
};

export default BrandSmallCard;
