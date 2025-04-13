// allowing specific type literals and custom string
type TUtility<T> = T | (string & {});
type TActions = TUtility<"edit" | "create" | "delete" | "add">;
function tableActionHandler(action:  TActions): void {
  console.log("action" , action);
}
tableActionHandler("");
