import ConfirmationCard from "@components/ui/common/confirmation-card";
import { useModalAction, useModalState } from "@components/ui/modal.context";
import { useDeleteExamListMutation } from "@data/examlist/use-examlist-delete.mutation";
// import ConfirmationCard from "@components/common/confirmation-card";
// import {
//   useModalAction,
//   useModalState,
// } from "@components/ui/modal/modal.context";
// import { useDeleteCategoryMutation } from "@data/category/use-category-delete.mutation";

const ExamListDeleteView = () => {
  const { mutate: deleteExamList, isLoading: loading } =
    useDeleteExamListMutation();
  const { data } = useModalState();
  const { closeModal } = useModalAction();
  function handleDelete() {
    deleteExamList(data);
    closeModal();
  }
  return (
    <ConfirmationCard
      onCancel={closeModal}
      onDelete={handleDelete}
      deleteBtnLoading={loading}
    />
  );
};

export default ExamListDeleteView;
