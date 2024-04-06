import dynamic from "next/dynamic";
import Modal from "@components/ui/modal/modal";
import { useModalAction, useModalState } from "./modal.context";
// import ShopProfileCard from "@components/profile/profile-card";
const Login = dynamic(() => import("@components/auth/login"));
const Register = dynamic(() => import("@components/auth/register"));
const ForgotPassword = dynamic(() =>
  import("@components/auth/forget-password/forget-password")
);
const SelectExamType = dynamic(() =>
  import("@components/ui/modal/select-exam-type")
);
const ExplanationModal = dynamic(() =>
  import("@components/ui/modal/explanation-modal")
);
const QuestionFeedbackModal = dynamic(() =>
  import("@components/ui/modal/question-feedback-modal")
);
// const CreateOrUpdateAddressForm = dynamic(
//   () => import("@components/address/address-form")
// );
// const AddressDeleteView = dynamic(
//   () => import("@components/address/address-delete-view")
// );

const ManagedModal = () => {
  const { isOpen, view, data } = useModalState();
  const { closeModal } = useModalAction();

  return (
    <Modal open={isOpen} onClose={closeModal}>
      {view === "LOGIN_VIEW" && <Login />}
      {view === "REGISTER" && <Register />}
      {view === "FORGOT_VIEW" && <ForgotPassword />}
      {view === "SELECT_EXAMTYPE" && <SelectExamType data={data} />}
      {view === "CHECK_EXPLANATION" && <ExplanationModal data={data} />}
      {view === "QUESTION_FEEDBACK" && <QuestionFeedbackModal data={data} />}
      {/*  {view === "ADD_OR_UPDATE_ADDRESS" && <CreateOrUpdateAddressForm />}
      {view === "DELETE_ADDRESS" && <AddressDeleteView />}
      {view === "PRODUCT_DETAILS" && (
        <ProductDetailsModalView productSlug={data} />
      )}
      {view === "SHOP_INFO" && (
        <ShopProfileCard
          data={data}
          cardClassName="!hidden"
          className="!flex flex-col !w-screen !h-screen !rounded-none"
        />
      )} */}
    </Modal>
  );
};

export default ManagedModal;
