import { component$, useStore } from "@builder.io/qwik";
import { Button } from "~/components/button";

type ButtonState = {
  count: number;
};

export default component$(() => {
  const state = useStore<ButtonState>({
    count: 0,
  });

  return (
    <div>
      <Button
        onClick$={() => ++state.count}
        label={state.count}
        className="m-4"
      ></Button>
    </div>
  );
});
