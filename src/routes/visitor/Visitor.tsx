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
          <div className="text-3xl mt-8">Payments</div>
          <div className="text-3xl">Made</div>
          <div className="text-3xl font-bold mb-4">Better</div>

          <div className="text-xl mb-2">
            A modern payment platform that helps empower companies to change the
            world.
          </div>

          <div className="flex mt-12">
            <BasicButton
              variant="primary-grow"
              onClick={() => navigate('/visitor/login')}>
              Get started
            </BasicButton>
          </div>
        </FormSmall>
      </MainLayout>
    </>
  );
};

export default Visitor;
