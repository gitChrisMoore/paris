import { useNavigate } from 'react-router';
import BasicButton from '../../components/Buttons/BasicButton/BasicButton';
import FormSmall from '../../layouts/Forms/FormSmall';
import MainLayout from '../../layouts/MainLayout/MainLayout';

const Visitor = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainLayout type={'brand'}>
        <FormSmall>
          <div className="flex my-5">
            <div className="text-lg font-medium mb-2 mx-auto">Choose Experience</div>
          </div>
          <div className="flex mt-2">
            <BasicButton variant="primary-grow" onClick={() => navigate('/account/login')}>
              Retailer
            </BasicButton>
          </div>
          <div className="flex mt-2">
            <BasicButton variant="outlined-grow" onClick={() => navigate('/visitor/login')}>
              Customer
            </BasicButton>
          </div>
        </FormSmall>
      </MainLayout>
    </>
  );
};

export default Visitor;
