import CloseIcon from "@/assets/icons/CloseIcon";
import GithubLogoIcon from "@/assets/icons/GithubLogoIcon";
import { useInfoPopUp } from "@/contexts/InfoPopUpProvider";
import { useLanguage } from "@/contexts/LanguageProvider";
import { motion } from "framer-motion";
import { twJoin } from "tailwind-merge";
import { useOnClickOutside } from "usehooks-ts";

const infoText: LocatedString = {
  PT: `Olá, seja bem vindo ao MyComponentsHub, um app simples feito para centralizar, armazenar e compartilhar meus componentes. Por aqui armazeno componentes idealizados por mim ou replicações de funcionalidades e estilos.

  Esse app foi feito utilizando ReactJs, Typescript e TailwindCSS e você pode acessar o código fonte no meu Github.`,
  EN: `Hello, welcome to MyComponentsHub, a simple app designed to centralize, store, and share my components. Here, I store components conceptualized by me or reproductions of functionalities and styles.

  This app was built using ReactJs, Typescript, and TailwindCSS, and you can access the source code on my Github.`,
};

interface InfoViewProps {
  containerRef: React.RefObject<HTMLElement>;
}

const InfoView: React.FC<InfoViewProps> = ({ containerRef }) => {
  const { language } = useLanguage();
  const { togglePopUp } = useInfoPopUp();
  useOnClickOutside(containerRef, togglePopUp);
  return (
    <motion.div
      className={twJoin(
        "flex flex-col justify-center items-center gap-5 p-6 pt-12 sm:w-[28rem] w-80 fixed z-[3] rounded-md border top-1/2 left-1/2",
        "border-slate-950 bg-gray-200 dark:bg-slate-800 dark:border-slate-500"
      )}
      initial={{
        translateY: "-55%",
        translateX: "-50%",
        opacity: "60%",
      }}
      animate={{
        translateY: "-50%",
        translateX: "-50%",
        opacity: "100%",
      }}
      transition={{
        ease: "easeInOut",
        duration: 0.2,
      }}
      exit={{
        opacity: 0,
        transition: {
          ease: "easeIn",
          duration: 0.3,
        },
      }}
    >
      <button className="absolute top-3 right-3 input-focus rounded-md">
        <CloseIcon size={24} onClick={togglePopUp}></CloseIcon>
      </button>
      <p className="whitespace-pre-line text-justify mb-8">
        {infoText[language]}
      </p>
      <a
        className="flex items-center gap-2 w-fit border rounded-lg px-3 py-1.5 input-primary input-focus"
        href={"https://github.com/masachetti/MyComponentsHub"}
        target="_blank"
      >
        <GithubLogoIcon size={30} /> Github
      </a>
    </motion.div>
  );
};

export default InfoView;
