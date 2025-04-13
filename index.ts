// allowing specific type literals and custom string

type TActions = "edit" | "create" | "delete" | "add";
type TUtility<T extends string> = T | (string & {});
function tableActionHandler<T extends TUtility<TActions>>(action:  T): void {
  console.log("action" , action);
}
tableActionHandler("")
