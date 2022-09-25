export function Button(props: any) {
  return (
    <button
      {...props}
      className={
        props.className +
        " rounded border-red-300 border bg-slate-400 hover:bg-red-200 text-white"
      }
    >
      {props.label}
    </button>
  );
}
