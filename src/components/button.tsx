export function Button(props: any) {
  return (
    <button
      {...props}
      className={
        props.className +
        " rounded border-gray-800 border bg-slate-200 text-gray-600 hover:bg-slate-400 hover:text-white p-2"
      }
    >
      {props.label}
    </button>
  );
}
