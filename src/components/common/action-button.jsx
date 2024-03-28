import Link from "next/link";
import Eye from "@components/icons/eye-icon";
import { useModalAction } from "@components/ui/modal/modal.context";

const ActionButtons = ({
  id,
  deleteModalView = false,
  randomOrNormalModalView = false,
  editUrl,
  detailsUrl,
  closeDetails = false,
  setCloseOrOpen,
  closeOrOpen,
  redirect,
  //   userStatus = false,
  //   isUserActive = false,
  //   isShopActive,
  //   approveButton = false,
}) => {
  const { openModal } = useModalAction();
  function handleDelete(e) {
    e.preventDefault();
    openModal(deleteModalView, id);
  }
  function handleTypeOfExam(e) {
    e.preventDefault();
    // openModal(randomOrNormalModalView, id);
  }
  //   function handleUserStatus(type: string) {
  //     openModal("BAN_CUSTOMER", { id, type });
  //   }
  //   function handleShopStatus(status: boolean) {
  //     if (status === true) {
  //       openModal("SHOP_APPROVE_VIEW", id);
  //     } else {
  //       openModal("SHOP_DISAPPROVE_VIEW", id);
  //     }
  //   }
  return (
    <div className="space-s-5 inline-flex items-center w-[120px]">
      {randomOrNormalModalView && (
        <button
          onClick={handleTypeOfExam}
          className="text-red-500 transition duration-200 hover:text-red-600 focus:outline-none"
          title={"Delete?"}
        >
          <div>icon</div>
        </button>
      )}
      {/* 
      {userStatus && (
        <>
          {isUserActive ? (
            <button
              onClick={() => handleUserStatus("ban")}
              className="text-red-500 transition duration-200 hover:text-red-600 focus:outline-none"
              title={t("text-ban-user")}
            >
              <BanUser width={20} />
            </button>
          ) : (
            <button
              onClick={() => handleUserStatus("active")}
              className="text-accent transition duration-200 hover:text-accent focus:outline-none"
              title={t("text-activate-user")}
            >
              <CheckMarkCircle width={20} />
            </button>
          )}
        </>
      )} */}

      {closeDetails && (
        <div
          className="flex flex-col justify-start items-center h-10 w-10 relative overflow-hidden gap-2.5 rounded-[20px] bg-[#d9d9d9] "
          title={"text-edit"}
          onClick={() => setCloseOrOpen(!closeOrOpen)}
        >
          {closeOrOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 absolute left-2 top-2"
              preserveAspectRatio="none"
            >
              <path d="M19 12.998H5V10.998H19V12.998Z" fill="#14130A"></path>
            </svg>
          ) : (
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 absolute left-2 top-2"
              preserveAspectRatio="none"
            >
              <path
                d="M19 13.498H13V19.498H11V13.498H5V11.498H11V5.49805H13V11.498H19V13.498Z"
                fill="#14130A"
              ></path>
            </svg>
          )}{" "}
        </div>
      )}
      {detailsUrl && (
        <Link
          href={detailsUrl}
          className="ml-2 text-base transition duration-200 hover:text-heading"
          title={t("text-view")}
        >
          <Eye width={24} />
        </Link>
      )}
    </div>
  );
};

export default ActionButtons;
