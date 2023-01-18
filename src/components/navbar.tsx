import TagPickerComponent from "./tagpicker";

const Navbar = () => {
  return (
    <nav className="grid grid-cols-8 gap-10 bg-optionsGrey w-full text-paper-500 p-2">
      <div className="col-span-2 text-center">
        <a className="text-3xl font-western" href="/">
          Gunslinger
        </a>
      </div>
      <div className="pt-2 col-start-3 col-span-4 grid grid-flow-col gap-3 text-center">
        <a href="/">ToDo</a>
      </div>
      <a className="pt-2 col-start-8 text-center" href="/">
        Sign in
      </a>
      <a className="pt-2 col-start-8 text-center" href="/gunslinger">
        Gunslinger generator
      </a>
    </nav>
  );
};
export default Navbar;
