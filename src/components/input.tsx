export function Input(props: any) {
  return (
    <>
      {props.label && <label htmlFor="props.id">{props.label}</label>}
      <input {...props} />
    </>
  );
}
