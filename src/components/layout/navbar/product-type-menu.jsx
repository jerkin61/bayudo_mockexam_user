import { useState } from "react";
import { useRouter } from "next/router";
import { useLayer } from "react-laag";
import cn from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown } from "@components/icons/caret-down";
import ErrorMessage from "@components/ui/error-message";
// import DropdownLoader from "@components/ui/loaders/dropdown-loader";
import { zoomInBottom } from "@utils/motion/zoom-in-bottom";
// import * as typeIcon from "@components/icons/type";
// import { getIcon } from "@utils/get-icon";
import Scrollbar from "@components/ui/scrollbar";
// import { useTypesQuery } from "@data/type/use-types.query";
import { useWindowSize } from "@utils/use-window-size";

const ProductTypeMenu = ({
  className,
  btnClassName = "border border-border-200 text-accent rounded min-w-150 px-4",
}) => {
  // const { isLoading: loading, data, error } = useTypesQuery();
  const { isLoading: loading, data, error } = {};

  const [isOpen, setOpen] = useState(false);
  const { width } = useWindowSize();
  const router = useRouter();
  const placement =
    width < 1280
      ? router.locale === "ar" || router.locale === "he"
        ? "bottom-start"
        : "bottom-end"
      : "bottom-end";

  const { renderLayer, triggerProps, layerProps } = useLayer({
    isOpen,
    onOutsideClick: close, // close the menu when the user clicks outside
    onDisappear: close, // close the menu when the menu gets scrolled out of sight
    overflowContainer: false, // keep the menu positioned inside the container
    placement: placement, // we prefer to place the menu "bottom-end"
    triggerOffset: 10, // keep some distance to the trigger
    containerOffset: 16, // give the menu some room to breath relative to the container
  });

  // if (error) return <ErrorMessage message={error.message} />;
  // helper function to close the menu
  function close() {
    setOpen(false);
  }

  const selectedMenu = data?.types?.find((type) =>
    router.asPath.includes(type.slug)
  );
  function handleClick(path) {
    close();
    router.push(path);
  }

  return (
    <div className={className}>
      {loading ? (
        // <DropdownLoader uniqueKey="product-type-menu" />
        <div>Dropdown loader</div>
      ) : (
        <>
          <button
            type="button"
            className={cn(
              "flex items-center flex-shrink-0 bg-light text-sm md:text-base font-semibold h-10 focus:outline-none",
              btnClassName
            )}
            aria-label="toggle profile dropdown"
            onClick={() => setOpen((prev) => !prev)}
            {...triggerProps}
          >
            {selectedMenu?.icon && (
              <span className="flex w-5 h-5 me-2 items-center justify-center">
                {/* {getIcon({
                  iconList: typeIcon,
                  iconName: selectedMenu?.icon,
                  className: "max-h-full max-w-full",
                })} */}
              </span>
            )}
            {selectedMenu?.name}
            <span className="flex ps-2.5 pt-1 ms-auto">
              <CaretDown />
            </span>
          </button>

          {renderLayer(
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  {...layerProps}
                  initial="from"
                  animate="to"
                  exit="from"
                  variants={zoomInBottom()}
                  className="py-2 w-48 h-56 min-h-40 max-h-56 sm:max-h-72 bg-light rounded shadow-700 z-20"
                >
                  <Scrollbar
                    className="w-full h-full"
                    options={{
                      scrollbars: {
                        autoHide: "never",
                      },
                    }}
                  >
                    {data?.types?.map(({ id, name, slug, icon }) => (
                      <div key={id}>
                        <button
                          onClick={() => handleClick(`/${slug}`)}
                          className="flex space-s-4 w-full items-center px-5 py-2.5 text-sm font-semibold capitalize text-body-dark transition duration-200 hover:text-accent focus:outline-none"
                        >
                          {/* {icon && (
                            <span className="flex w-5 h-5 items-center justify-center">
                              {getIcon({
                                iconList: typeIcon,
                                iconName: icon,
                                className: "max-h-full max-w-full",
                              })}
                            </span>
                          )} */}
                          <span>{name}</span>
                        </button>
                      </div>
                    ))}

                    <button
                      onClick={() => handleClick(`/grocery-two`)}
                      className="flex space-s-4 w-full items-center px-5 py-2.5 text-sm font-semibold capitalize text-body-dark transition duration-200 hover:text-accent focus:outline-none"
                    >
                      <span className="flex w-5 h-5 items-center justify-center">
                        {/* {getIcon({
                          iconList: typeIcon,
                          iconName: "FruitsVegetable",
                          className: "max-h-full max-w-full",
                        })} */}
                      </span>

                      <span>Grocery Two</span>
                    </button>

                    <button
                      onClick={() => handleClick(`/furniture-two`)}
                      className="flex space-s-4 w-full items-center px-5 py-2.5 text-sm font-semibold capitalize text-body-dark transition duration-200 hover:text-accent focus:outline-none"
                    >
                      <span className="flex w-5 h-5 items-center justify-center">
                        {/* {getIcon({
                          iconList: typeIcon,
                          iconName: "FurnitureIcon",
                          className: "max-h-full max-w-full",
                        })} */}
                      </span>

                      <span>Furniture Two</span>
                    </button>
                  </Scrollbar>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </>
      )}
    </div>
  );
};

export default ProductTypeMenu;
