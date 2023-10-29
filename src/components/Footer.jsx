import { BsLinkedin, BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="w-full h-full flex flex-row justify-end gap-2 items-end text-blue-900">
      <h4 className="text-black text-sm">
        Desarrollado por{" "}
        <a
          href="https://leandropereyra.ar"
          className="duration-300 hover:text-violet-900 hover:border-b-2 hover:border-violet-900"
        >
          Leandro Pereyra
        </a>
      </h4>
      <div className="flex flex-row items-end justify-end gap-5 ml-2">
        <a href="https://github.com/txakurhub">
          <BsGithub
            size={25}
            color="black"
            className="duration-300 hover:opacity-70"
          />
        </a>
        <a href="https://linkedin.com/in/leandro-pereyra">
          <BsLinkedin
            size={25}
            color="blue"
            className="duration-300 hover:opacity-70"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
