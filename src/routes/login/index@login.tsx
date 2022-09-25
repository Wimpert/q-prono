import { component$, $, h } from "@builder.io/qwik";
import { Button } from "~/components/button";
import { Input } from "~/components/input";

export default component$(() => {
  const handleKeyup = $((e: any) => console.log("ed", e));

  return (
    <form class="flex flex-col">
      <Input
        class="m-2"
        type="text"
        id="userName"
        label="user name"
        onKeyup$={handleKeyup}
      />
      <Input class="m-2" type="password" id="password" onKeyup$={handleKeyup} />
      <Button type="submit" label="login" className="m-2 p-2 grow basis-1" />
    </form>
  );
});
