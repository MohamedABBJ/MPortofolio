import ButtonProps from "../Interfaces/button-props";

function Button(props: ButtonProps) {
  return (
    <button className="rounded-2xl border-2 px-6 py-1 transition-colors duration-300 hover:bg-slate-200">
      <p>{props.value}</p>
    </button>
  );
}

export default Button;
