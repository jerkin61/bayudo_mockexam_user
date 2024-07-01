import { useState } from "react";
import cn from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import { MinusIcon } from "@components/icons/minus-icon";
import { PlusIcon } from "@components/icons/plus-icon";
// import { heightCollapse } from "@utils/motion/height-collapse";
import { useTranslation } from "next-i18next";

export function heightCollapse() {
  return {
    from: {
      opacity: 0,
      height: 0,
      transition: {
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
    to: {
      opacity: 1,
      height: "auto",
      transition: {
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  };
}
const Collapse = ({
  i,
  expanded,
  setExpanded,
  title,
  content,
  translatorNS,
}) => {
  const isOpen = i === expanded;
  // active state style
  const activeClass = isOpen ? "shadow-sm" : "";

  const { t } = useTranslation(translatorNS);

  return (
    <div
      className={cn(
        "border border-solid border-border-200 bg-light rounded mb-2.5 transition-all hover:border-border-base",
        activeClass
      )}
    >
      <motion.header
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
        className="py-4 px-5 rounded cursor-pointer flex items-center justify-between transition-colors"
      >
        <h2 className="text-sm md:text-base font-semibold leading-relaxed text-heading">
          {t(title)}
        </h2>
        {isOpen ? (
          <MinusIcon
            className="flex-shrink-0 stroke-2"
            width={18}
            height={18}
          />
        ) : (
          <PlusIcon className="flex-shrink-0 stroke-2" width={20} height={20} />
        )}
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="from"
            animate="to"
            exit="from"
            variants={heightCollapse()}
          >
            <div className="md:pt-1 pb-4 px-5 leading-7 text-sm md:text-base md:leading-loose text-body-dark">
              {t(content)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Accordion = ({ items, translatorNS }) => {
  const [expanded, setExpanded] = useState(0);

  return (
    <>
      {items.map((item, index) => (
        <Collapse
          i={index}
          key={item.title}
          title={item.title}
          content={item.content}
          expanded={expanded}
          setExpanded={setExpanded}
          translatorNS={translatorNS}
        />
      ))}
    </>
  );
};

export default Accordion;
